import { useDeleteSubscriptionMutation, useDeleteUserMutation } from "@/generated/graphql"
import toast from "react-hot-toast";

export const useDeleteSubscription = (onComplete?: Function) => {
  const [deleteSubscriptionMutation, { error, loading }] = useDeleteSubscriptionMutation({
    onCompleted: (data) => {
      toast.success("Subscription deleted successfully");

      if (onComplete) onComplete(data);
    },
    onError: (error) => {
      toast.error("Error deleting subscription " + error.message);
    }
  });

  const deleteSubscription = (id: string) => deleteSubscriptionMutation({ variables: { id } });

  return {
    deleteSubscription,
    error,
    loading
  }
}