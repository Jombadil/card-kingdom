import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectResources } from '../../../reducers/recourcesSlice';
import { selectProducers } from '../../../reducers/producersSlice'
import { tickActions } from '../../../actions/actions';
import { commas, formatNumSymbol } from '../../../Utils';
import styles from './cardDisplay.module.css'



export default function CardDisplay() {

  const resources = useSelector(selectResources);
  const producers = useSelector(selectProducers);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      tickActions(dispatch, producers);
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch, producers]) 

  return (
      <>
        <div className={styles.cardDisplay}>
          <div className={styles.cardCount}>{(resources.cards.amount > 1000000) ? formatNumSymbol(resources.cards.amount + ' cards', 2) : commas(resources.cards.amount) + ' cards'}</div>
          <div className={styles.cps}>Cards per Second (cps): {resources.cards.cps}</div>
        </div>
      </>
  )
}
