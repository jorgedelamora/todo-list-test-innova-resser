import React, {useState} from 'react'
import TheTodoList from '../../organisms/TheTodoList';
import AddTodoForm from '../../molecules/AddTodoForm';
import PaginationMenu from '../../molecules/PaginationMenu';
import usePagination from '../../../hooks/usePagination';
import { Row, Col} from 'react-flexbox-grid';

import styles from './TodoList.module.scss';

const TodoList = ({todos, onAddTodo, onToggleCompleted, onRefresh}) => {
  const [page, setPage] = useState(1);
  const {paginatedItems} = usePagination(todos, 10);

  const handleOnSelectPage = (page) => {
    setPage(page);
  }
  const pageAsIdx = page - 1;

  if (!paginatedItems) {
    return null;
  }
  
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={11}>
          <PaginationMenu numberOfPages={paginatedItems.length} currentPage={page} onSelectPage={handleOnSelectPage}/>
        </Col>
        <Col xs={1}>
          <button onClick={onRefresh}>refresh</button>
        </Col>
      </Row>
      <AddTodoForm  onAddTodo={onAddTodo} />
      <TheTodoList todos={paginatedItems[pageAsIdx]} onToggleCompleted={onToggleCompleted} />
    </div>
  )
}

export default TodoList