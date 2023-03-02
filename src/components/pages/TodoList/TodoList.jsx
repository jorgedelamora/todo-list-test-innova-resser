import React from 'react'
import TheTodoList from '../../organisms/TheTodoList';
import AddTodoForm from '../../molecules/AddTodoForm'

import styles from './TodoList.module.scss';

const TodoList = ({data, onAddTodo}) => {
  return (
    <div className={styles.container}>
      <AddTodoForm  onAddTodo={onAddTodo} />
      <TheTodoList data={data}/>
    </div>
  )
}

export default TodoList