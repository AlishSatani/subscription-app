import { useCreateUserMutation, useUpdateUserMutation, useUserQuery } from "@/generated/graphql";
import { RegisterSchema } from "@/modules/auth/schema";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export const useUserForm = (id?: string) => {
  const router = useRouter();

  const { data } = useUserQuery({
    variables: {
      id: id
    },
    skip: !id
  });

  const [createUser, { error, loading }] = useCreateUserMutation({
    onCompleted: () => {
      toast.success("User created successfully");
      router.push('/users')
    },
    onError: (error) => {
      toast.error("Error creating user " + error.message);
    }
  });

  const [updateUser, { error: updateError, loading: updateLoading }] = useUpdateUserMutation({
    onCompleted: () => {
      toast.success("User updated successfully");
      router.push('/users')
    },
    onError: (error) => {
      toast.error("Error updating user " + error.message);
    }
  });

  const handleSubmit = (input: any) => {
    const sanitizedInput = RegisterSchema.cast(input, {
      stripUnknown: true
    })

    const formattedInput = {
      name: sanitizedInput.name,
      email: sanitizedInput.email,
      password: sanitizedInput.password,
    }

    if (!sanitizedInput?.id) {
      return createUser({
        variables: {
          input: formattedInput
        }
      })
    }

    return updateUser({
      variables: {
        id: sanitizedInput.id,
        user: formattedInput //don't pass id along with input else it will throw error
      }
    })
  }

  const initialvalues = RegisterSchema.cast(data?.user, {
    stripUnknown: true
  })

  return {
    initialvalues,
    validationSchema: RegisterSchema,
    handleSubmit,
    loading: loading || updateLoading,
    error: error || updateError
  }
}