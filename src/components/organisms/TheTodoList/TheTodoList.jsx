import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'

import styles from './TheTodoList.module.scss';

const TheTodoList = ({data, }) => {
  return (
    <div className={styles.container}>
      <div className={styles.listHead}>
        <p>#</p>
        <p>User</p>
        <p>Description</p>
        <p>Completed</p>
      </div>
      <ul>
        {data.map((item) => (
          <ListItem 
            key={`item-${item.id}`}
            userId={item.userId}
            id={item.id} 
            title={item.title} 
            completed={item.completed}/>
        ))}
      </ul>
    </div>
  )
}

export default TheTodoList;