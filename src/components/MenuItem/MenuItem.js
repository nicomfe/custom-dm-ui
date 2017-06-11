import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './MenuItem.scss'

const MenuItem = (props) => {
  const { to, title, description } = props
  return (
    <Link to={to} className={styles.listGroupItem}>
      <h4>{title}</h4>
      <p>{description}</p>
    </Link>
  )
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default MenuItem
