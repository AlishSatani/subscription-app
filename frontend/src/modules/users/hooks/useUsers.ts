import { useUsersQuery } from "@/generated/graphql";

export const useSubscriptions = () => {
  const {data, loading, error} = useUsersQuery();
  
  return {
    users: data?.users?.nodes || [],
    loading,
    error: error?.message
  }
}