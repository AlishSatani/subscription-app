import { useSubscriptionsQuery } from '@/generated/graphql';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const usePaginatedSubscriptions = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading, error, refetch } = useSubscriptionsQuery({
    variables: {
      first: 10,
      offset: currentPage * 10
    }
  })

  const hasNextPage = data?.subscriptions?.pageInfo?.hasNextPage;

  const hasPreviousPage = data?.subscriptions?.pageInfo?.hasPreviousPage;

  const refetchSubscriptions = () => {
    return refetch({
      first: 10,
      offset: currentPage * 10

    })
  }

  const getNextpage = () => {
    if(!hasNextPage) return;

    return router.push({
      query: {
        page: currentPage + 1,
      }
    })
  }

  const getPreviouspage = () => {
    if(!hasPreviousPage) return;

    return router.push({
      query: {
        page: currentPage - 1,
      }
    })
  }

  useEffect(() => {
    if (router.query.page) {
      setCurrentPage(parseInt(router.query.page as string))
    }
  }, [router.query.page]);


  useEffect(() => {
    refetchSubscriptions();
  }, [currentPage]);

  return {
    loading,
    subscriptions: data?.subscriptions?.nodes || [],
    getNextpage,
    error,
    getPreviouspage,
    refetchSubscriptions,
    hasNextPage,
    hasPreviousPage
  }
}