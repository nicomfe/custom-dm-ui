import React from 'react'

import styles from './ListLoader.scss'

const ListLoader = props => (
  <div {...props}>
    <div className={styles.timelineItem}>
      <div className={styles.animatedbackground}>
        <div className={`${styles.backgroundMasker} ${styles.headerTop}`} />
        <div className={`${styles.backgroundMasker} ${styles.headerLeft}`} />
        <div className={`${styles.backgroundMasker} ${styles.headerRight}`} />
        <div className={`${styles.backgroundMasker} ${styles.headerBottom}`} />
        <div className={`${styles.backgroundMasker} ${styles.subheaderLeft}`} />
        <div className={`${styles.backgroundMasker} ${styles.subheaderRight}`} />
      </div>
    </div>
  </div>
)

ListLoader.propTypes = {}

export default ListLoader
