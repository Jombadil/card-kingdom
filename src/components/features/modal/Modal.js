import React from 'react'
import { useSelector } from 'react-redux'
import { selectModal } from '../../../reducers/modalSlice'
import styles from './Modal.module.css'

export default function Modal() {
  const modal = useSelector(selectModal)
  return (
      <div className={styles.modalWrapper}>
        
        <div className={styles.modalWindow}>
            <div className={styles.header}>{modal.header}</div>
            <div className={styles.content}>{modal.content}</div>
            <div className={styles.footer}>{modal.footer}</div>
        </div>

        <div className={styles.overlay}></div>
      </div>
  )
}
