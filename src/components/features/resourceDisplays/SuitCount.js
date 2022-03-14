import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectResources } from '../../../reducers/recourcesSlice'
import styles from './cardDisplay.module.css'

export default function SuitCount({name, count}) {
    const resources = useSelector(selectResources)

    // const SUITS = resources.sui
  return (
      <div className={styles.suitDisplay}>
        <img height={'30px'} src={'assets/img/suits/diamond.png'} alt={'icon'} />
        <div>{name}</div>
        <div>{count}</div>
      </div>
  )
}
