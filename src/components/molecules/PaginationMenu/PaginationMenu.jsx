import React from 'react'

import PageNumber from '../../atoms/PageNumber';

import styles from './PaginationMenu.module.scss';

const PaginationMenu = ({numberOfPages, onSelectPage, currentPage}) => {

    const pages = Array.from({length: numberOfPages}, (_, page) => {
        return page + 1;
    })
  
  return (
    <div className={styles.container}>
    {pages.map((page) => {
      const isSelected = currentPage === page;
      return <PageNumber page={page} onSelect={onSelectPage} selected={isSelected}/>
    })}
    </div>
  )
}

export default PaginationMenu