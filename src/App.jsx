import { useState, useEffect } from 'react'
import './App.scss'

import Loading from './components/pages/Loading';
import TodoList from './components/pages/TodoList';

function App() {
  const [data, setData] = useState(null);

  const handleOnAddTodo = (todo) => {
    const newTodo = {
      id: 'someRandomId',
      userId: 'someRandomUserId',
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

  console.log(data);
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
