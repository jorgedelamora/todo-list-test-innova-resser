import React, {useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import Loading from './components/pages/Loading';
import TodoList from './components/pages/TodoList';
import { fetchData, generateUniqueId } from './utils';

import './App.scss'
function App() {
  const [todos, setTodos] = useState(null);
  const {data, error, isLoading} = useQuery('data', fetchData);
  
  const handleOnAddTodo = (todo) => {
    const newTodo = {
      id: generateUniqueId(),
      userId: generateUniqueId(),
      title: todo,
      completed: false
    }
    setTodos((todos) => [newTodo, ...todos]);
  }

  useEffect(() => {
    setTodos(data);
  },[data])
  
  if (isLoading || !todos) {
    return <Loading />
  }

  if(error) {
    return <Error />
  }

  return <TodoList todos={todos} onAddTodo={handleOnAddTodo} />
}

export default App
