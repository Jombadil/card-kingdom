import React from 'react'
import styles from './cardDisplay.module.css'

export default function SuitCount({name, count}) {
  return (
      <div className={styles.suitDisplay}>
        <img height={'30px'} src={'assets/img/suits/diamond.png'} alt={'icon'} />
        <div>{name}</div>
        <div>{count}</div>
      </div>
  )
}
