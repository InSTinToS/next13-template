import { Component, FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient()

const withReactQuery = (WrappedComponent: FC) => {
  class WithReactQuery extends Component {
    render() {
      return (
        <QueryClientProvider client={queryClient}>
          <WrappedComponent />
        </QueryClientProvider>
      )
    }
  }

  return WithReactQuery
}

export default withReactQuery
