import {
  useCreateSubscriptionMutation,
  useSubscriptionQuery,
  useUpdateSubscriptionMutation,
} from "@/generated/graphql";
import { SubscriptionSchema } from "../schema";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export const defaultSubscriptionDetail = {
  date: "",
  startTime: "",
  endTime: "",
};

export const useSubscriptionForm = (id?: string) => {
  const router = useRouter();

  const { data } = useSubscriptionQuery({
    variables: {
      id: id,
    },
    skip: !id,
  });

  const [createSubscription, { error, loading }] =
    useCreateSubscriptionMutation({
      onCompleted: () => {
        toast.success("Subscription created successfully");
        router.push("/subscriptions");
      },
      onError: (error) => {
        toast.error("Error creating subscription " + error.message);
      },
    });

  const [updateSubscription, { error: updateError, loading: updateLoading }] =
    useUpdateSubscriptionMutation({
      onCompleted: () => {
        toast.success("Subscription updated successfully");
        router.push("/subscriptions");
      },
      onError: (error) => {
        toast.error("Error updating subscription " + error.message);
      },
    });

  const handleSubmit = (input: any) => {
    const sanitizedInput = SubscriptionSchema.cast(input, {
      stripUnknown: true,
    });

    const formattedInput = {
      name: sanitizedInput.name,
      subscriptionDetailsUsingId: {
        create: sanitizedInput.subscriptionDetails,
        deleteOthers: true,
      },
    };

    if (!id) {
      return createSubscription({
        variables: {
          input: formattedInput,
        },
      });
    }

    return updateSubscription({
      variables: {
        id: id,
        subscription: formattedInput, //don't pass id along with input else it will throw error
      },
    });
  };

  const initialValues = SubscriptionSchema.cast(
    {
      ...data?.subscription,
      subscriptionDetails: data?.subscription?.subscriptionDetails.nodes || [
        defaultSubscriptionDetail,
      ],
    },
    {
      stripUnknown: true,
    }
  );

  return {
    initialValues,
    validationSchema: SubscriptionSchema,
    handleSubmit,
    loading: loading || updateLoading,
    error: error || updateError,
  };
};
