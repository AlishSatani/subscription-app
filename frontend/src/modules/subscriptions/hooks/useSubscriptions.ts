import { useSubscriptionsQuery } from "@/generated/graphql";

export const useSubscriptions = () => {
  const {data, loading, error} = useSubscriptionsQuery();
  
  return {
    subscriptions: data?.subscriptions?.nodes || [],
    loading,
    error: error?.message
  }
}