import { useState, useEffect } from 'react'
import './App.scss'

import Loading from './components/pages/Loading';
import TodoList from './components/pages/TodoList';

function App() {
  const [data, setData] = useState(null);

  const handleOnAddTodo = (todo) => {
    const generateUniqueId = () => Math.round(Math.random() * 10000);
    const newTodo = {
      id: generateUniqueId(),
      userId: generateUniqueId(),
      title: todo,
      completed: false
    }
    setData([newTodo, ...data]);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const fetchedData = await res.json();
      setData(fetchedData);
    }

    fetchData();
  },[]);

  return (
    <div className="App">
      {!data && 
        <Loading />
      }
      {data && 
        <TodoList data={data} onAddTodo={handleOnAddTodo} />
      }
    </div>
  )
}

export default App
