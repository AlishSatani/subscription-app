import { useCurrentUserQuery } from "@/generated/graphql";

export const useCurrentUser = () => {
  const { data, loading, error } = useCurrentUserQuery();

  return {
    user: data?.currentUser,
    loading,
    error
  }
}