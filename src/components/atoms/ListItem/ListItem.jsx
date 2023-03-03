import classNames from 'classnames';
import React from 'react'
import { Col, Row } from 'react-flexbox-grid';
import styles from './ListItem.module.scss';


const ListItem = ({userId, id, title, completed, onToggleCompleted}) => {

  const CompletedImg = () => (
    <img 
      className={styles.completedIcon} 
      src={completed ? '../../../../public/check.svg' : '../../../../public/x.svg' }
      onClick={() =>onToggleCompleted(id)}  
    />
  )

  return (
    <li className={classNames(styles.container, {[styles.completed]: completed})} >
      <Row middle='xs'>
        <Col xs={1}>{id}</Col>
        <Col xs={1}>{userId}</Col>
        <Col xs={8} className={styles.textAlignStart}>{title}</Col>
        <Col xs={2}><CompletedImg/></Col>
      </Row>
    </li>
  )
}

export default ListItem