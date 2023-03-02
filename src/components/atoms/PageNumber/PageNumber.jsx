import React from 'react'
import classNames from 'classnames'

import styles from './PageNumber.module.scss';

const PageNumber = ({page, onSelect, selected}) => {
    return (
      <div 
        className={classNames(styles.container, {[styles.selected]:selected})} 
        onClick={() => onSelect(page)}>
        {page}
        </div>
    )
  }

export default PageNumber