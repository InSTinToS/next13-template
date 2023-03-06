'use client'

import withReactQuery from '@/hoc/withReactQuery'

import { useQuery } from 'react-query'
import styled from 'styled-components'

function CSRUserId() {
  const { data, isLoading } = useQuery('post', () =>
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res =>
      res.json()
    )
  )

  if (isLoading) return <h2>Loading...</h2>

  return <Main>{data.userId}</Main>
}

const Main = styled.div`
  background-color: red;
`

export default withReactQuery(CSRUserId)
