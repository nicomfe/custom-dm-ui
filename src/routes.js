import React from 'react'
import { Route } from 'react-router-dom'

import Base from './containers/Base/Base'

export const urls = {
  index: '/',
  list: '/list',
}

const Routes = () => <Route path={urls.index} component={Base} />

export default Routes
