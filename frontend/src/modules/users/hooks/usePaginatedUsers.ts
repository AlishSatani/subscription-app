import { useUsersQuery } from '@/generated/graphql';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const usePaginatedUsers = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading, error, refetch } = useUsersQuery({
    variables: {
      first: 10,
      offset: currentPage * 10
    }
  })

  const hasNextPage = data?.users?.pageInfo?.hasNextPage;

  const hasPreviousPage = data?.users?.pageInfo?.hasPreviousPage;

  const refetchUsers = () => {
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
    refetchUsers();
  }, [currentPage]);

  return {
    loading,
    users: data?.users?.nodes || [],
    getNextpage,
    error,
    getPreviouspage,
    refetchUsers,
    hasNextPage,
    hasPreviousPage
  }
}