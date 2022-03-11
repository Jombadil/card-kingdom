import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleProducerBtnClick } from '../../../actions/actions'
import { selectKingdomCards } from '../../../reducers/kingdomCardsSlice';
import { motion } from 'framer-motion';

import styles from './ProducerBtn.module.css';

export default function ProducerBtn({id, cost, count, name, enabled}) {

  const kingdomCards = useSelector(selectKingdomCards);
  const dispatch = useDispatch();

  return (
    <motion.div 
      id={id} 
      disabled={enabled} 
      onClick={(event) => handleProducerBtnClick(dispatch, event, cost, kingdomCards)} 
      className={`${styles.producerBtn} ${(!enabled) ? styles.enabled : styles.disabled}`}
      initial={{ height: '0' }}
      animate={{ height: '70px' }}
      transition={{ delay: 0, type: 'tween', duration: .05 }}
    >
        
        <div className={`${styles.producerBtnGuts} ${styles.noclick} ${styles.noselect}`}>

          <div className={`${styles.producerIcon}`}>
            <img height={'40px'} src={'assets/img/producer-icons/icon-woodblock-printer.png'} alt={'icon'} />
          </div>

          <div className={`${styles.producerInfo}`}>
            <p className={`${styles.producerName}`}>{name}</p>
            <p className={`${styles.producerCost}`}>Cost: {cost}</p>
          </div>

          <div className={`${styles.producerCount}`}>
          {count}
          </div>

        </div>
        
        
        
        
    </motion.div>
  )
}
