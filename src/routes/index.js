import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import NewPage from '../pages/NewPage'
import Admin from '../pages/Admin'

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
  {
    path: '/admin',
    exact: true,
    component: Admin,
  },
]

export default () => (
  <>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </>
)
