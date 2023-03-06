'use client'

import withReactQuery from '@/hoc/withReactQuery'

import { useQuery } from 'react-query'

function CSRUserId() {
  const { data, isLoading } = useQuery('post', () =>
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res =>
      res.json()
    )
  )

  if (isLoading) return <h2>Loading...</h2>

  return <main>{data.userId}</main>
}

export default withReactQuery(CSRUserId)
