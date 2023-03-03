import React, {useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import Loading from './components/pages/Loading';
import TodoList from './components/pages/TodoList';
import { fetchData, generateUniqueId } from './utils';

import './App.scss'
function App() {
  const [todos, setTodos] = useState(null);
  const {data, error, isLoading, refetch} = useQuery('data', fetchData);
  
  const handleOnAddTodo = (todo) => {
    const newTodo = {
      id: generateUniqueId(),
      userId: generateUniqueId(),
      title: todo,
      completed: false
    }
    setTodos((todos) => [newTodo, ...todos]);
  }

  const handleOnToggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const handleOnRefresh = () => {
    refetch();
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

  return <TodoList todos={todos} onAddTodo={handleOnAddTodo} onToggleCompleted={handleOnToggleCompleted} onRefresh={handleOnRefresh}/>
}

export default App
