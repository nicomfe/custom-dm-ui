import React from 'react'

import { urls } from '../../routes'
import MenuItem from '../../components/MenuItem/MenuItem'

const IndexContainer = () => (
  <div>
    <MenuItem to={urls.list} title="List" description="Example with list objects" />
  </div>
)

IndexContainer.propTypes = {}

export default IndexContainer
