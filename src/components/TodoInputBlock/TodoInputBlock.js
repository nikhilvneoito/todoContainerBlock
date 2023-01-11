import React from 'react'
import { useFederatedComponent } from '@appblocks/js-sdk'

const TodoInputBlock = (props) => {
  const system = {
    url: `${process.env.BLOCK_ENV_URL_todoInputBlock}/remoteEntry.js`,
    scope: 'todoInputBlock',
    module: './todoInputBlock',
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

export default TodoInputBlock
