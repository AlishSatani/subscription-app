import { useDeleteUserMutation } from "@/generated/graphql"
import toast from "react-hot-toast";

export const useDeleteUser = (onComplete?: Function) => {
  const [deleteUserMutation, { error, loading }] = useDeleteUserMutation({
    onCompleted: (data) => {
      toast.success("User deleted successfully");

      if (onComplete) onComplete(data);
    },
    onError: (error) => {
      toast.error("Error deleting user " + error.message);
    }
  });

  const deleteUser = (id: string) => deleteUserMutation({ variables: { id } });

  return {
    deleteUser,
    error,
    loading
  }
}