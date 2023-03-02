import React from 'react'

import styles from './ListItem.module.scss';

const ListItem = ({userId, id, title, completed}) => {
  return (
    <li className={styles.container}>
        <p>{id}</p>
        <p>{userId}</p>
        <p>{title}</p>
        <p>{completed ? 'C' : 'X'}</p>
    </li>
  )
}

export default ListItem