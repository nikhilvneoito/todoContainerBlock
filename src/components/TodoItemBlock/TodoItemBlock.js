import React from 'react'
import { useFederatedComponent } from '@appblocks/js-sdk'

const TodoItemBlock = (props) => {
  const system = {
    url: `${process.env.BLOCK_ENV_URL_todoItemBlock}/remoteEntry.js`,
    scope: 'todoItemBlock',
    module: './todoItemBlock',
  }

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(
    system?.url,
    system?.scope,
    system?.module,
    React
  )

  // console.log(FederatedComponent);
  return (
    <React.Suspense fallback={''}>
      {errorLoading ? `Error loading module "${module}"` : FederatedComponent && <FederatedComponent {...props} />}
    </React.Suspense>
  )
}

export default TodoItemBlock
