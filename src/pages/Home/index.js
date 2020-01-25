import React from 'react'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { Component } from './styled'

const Home = ({ exampleStore }) => {
  return (
    <Component>
      <h1>Hi</h1>
      <p>{exampleStore.test}</p>
      <button onClick={() => exampleStore.testFunc()}>Click</button>
    </Component>
  )
}

export default compose(
  inject(({ rootStore }) => ({
    exampleStore: rootStore.exampleStore,
  })),
  observer,
)(Home)
