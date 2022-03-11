import React from 'react'
import ProducerBtn from './ProducerBtn'
import { useSelector } from 'react-redux';
import { selectProducers } from '../../../reducers/producersSlice'

import styles from './ProducerContainer.module.css'

export default function ProducerContainer() {
    const producers = useSelector(selectProducers)
    
    
    const listProducers = producers.allProducers.map((producer) => {
      return producer.toggles.unlocked ?
      <li key={producer.id}>
          <ProducerBtn 
              name={producer.name} 
              count={producer.production.count} 
              cost={producer.cost.currentCost}
              id={producer.id}
              enabled={!producer.toggles.enabled}
          ></ProducerBtn>
      </li> : '';

    }
        
    )

  return (
    <ul className={styles.producerContainer}>{listProducers}</ul>
  )
}
