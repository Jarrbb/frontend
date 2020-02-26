import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import NewPage from '../pages/NewPage'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/newPage',
    exact: true,
    component: NewPage,
  },
]

export default () => (
  <>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </>
)
