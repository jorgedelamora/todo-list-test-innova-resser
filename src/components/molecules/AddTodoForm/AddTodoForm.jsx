import React, {useState} from 'react'

const AddTodoForm = ({onAddTodo}) => {

    const [newTodo, setNewTodo] = useState('');

    const handleOnChange = (e) => {
        const {value} = e.target;
        setNewTodo(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewTodo('');
        onAddTodo(newTodo);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange} value={newTodo} />
        <button type="submit">Create New Todo</button>
    </form>
  )
}

export default AddTodoForm