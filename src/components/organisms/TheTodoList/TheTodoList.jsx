import React from 'react'
import ListItem from '../../atoms/ListItem/ListItem'
import { Row, Col, Grid } from 'react-flexbox-grid';

import styles from './TheTodoList.module.scss';

const TheTodoList = ({todos, onToggleCompleted}) => {
  return (
    <Grid className={styles.container}>
      <Row className={styles.listHead}>
        <Col xs={1}>#</Col>
        <Col xs={1}>User</Col>
        <Col xs={8}>Description</Col>
        <Col xs={2}>Completed</Col>
      </Row>
      <ul className={styles.listBody}>
        {todos.map((item) => (
          <ListItem 
            key={`item-${item.id}`}
            userId={item.userId}
            id={item.id} 
            title={item.title} 
            completed={item.completed}
            onToggleCompleted={onToggleCompleted}
            />
        ))}
      </ul>
    </Grid>
  )
}

export default TheTodoList;