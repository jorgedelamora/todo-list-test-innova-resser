import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'
import AddTodoForm from '../../molecules/AddTodoForm'

import styles from './TodoList.module.scss';

const TodoList = ({data, onAddTodo}) => {
  return (
    <div className={styles.container}>
      <AddTodoForm  onAddTodo={onAddTodo} />
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

export default TodoList