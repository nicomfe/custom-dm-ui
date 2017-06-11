import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import styles from './ListItem.scss'

const ListItem = (props) => {
  const { item } = props
  if (!item) return null
  return (
    <li key={item.get('id')} className={styles.listItem}>
      {item.get('firstName')} {item.get('lastName')}
    </li>
  )
}

ListItem.propTypes = {
  item: ImmutablePropTypes.map,
}

export default ListItem
