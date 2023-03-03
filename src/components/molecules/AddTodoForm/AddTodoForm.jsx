import React, {useState} from 'react';

import styles from './AddTodoForm.module.scss';

const AddTodoForm = ({onAddTodo}) => {
    const [newTodo, setNewTodo] = useState('');

    const handleOnChange = (e) => {
        const {value} = e.target;
        setNewTodo(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newTodo){
          setNewTodo('');
          return;
        }
        onAddTodo(newTodo);
        setNewTodo('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input className={styles.input} type="text" onChange={handleOnChange} value={newTodo} />
        <button type="submit">Create New Todo</button>
    </form>
  )
}

export default AddTodoForm