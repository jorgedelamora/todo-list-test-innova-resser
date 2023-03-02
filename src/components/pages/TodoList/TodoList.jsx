import React, {useState} from 'react'
import TheTodoList from '../../organisms/TheTodoList';
import AddTodoForm from '../../molecules/AddTodoForm';
import PaginationMenu from '../../molecules/PaginationMenu';
import usePagination from '../../../hooks/usePagination';

import styles from './TodoList.module.scss';

const TodoList = ({todos, onAddTodo}) => {
  const [page, setPage] = useState(1);
  const {paginatedItems} = usePagination(todos, 10);

  const handleOnSelectPage = (page) => {
    setPage(page);
  }

  console.log( paginatedItems);
  
  const pageAsIdx = page - 1;

  if (!paginatedItems) {
    return null;
  }

  return (
    <div className={styles.container}>
      <PaginationMenu numberOfPages={paginatedItems.length} currentPage={page} onSelectPage={handleOnSelectPage}/>
      <AddTodoForm  onAddTodo={onAddTodo} />
      <TheTodoList todos={paginatedItems[pageAsIdx]} />
    </div>
  )
}

export default TodoList