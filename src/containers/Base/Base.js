import React from 'react'
import { Route } from 'react-router-dom'

import Index from '../Index/Index'
import List from '../List/List'
import { urls } from '../../routes'

const BaseContainer = () => (
  <div className="row">
    <Route exact path={urls.index} component={Index} />
    <Route exact path={urls.list} component={List} />
  </div>
)

export default BaseContainer
