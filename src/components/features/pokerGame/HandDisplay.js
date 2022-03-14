import { useDispatch, useSelector } from 'react-redux'
import { handleDealerToggleClick, handleSubmitHandClick } from '../../../actions/actions';
import { PLAYING_CARDS } from '../../../gameObjects/defaultPlayingCards';
import { selectPokerGame } from '../../../reducers/pokerGameSlice'
import { Card } from '../../Card'
import styles from './pokerGame.module.css'

export default function HandDisplay() {

  const currentHand = useSelector(selectPokerGame).currentHand;
  const dispatch = useDispatch();
  
  
  const currentHandCards = currentHand.map(cardID => {
    const cardObj = PLAYING_CARDS.find(item => item.id === cardID);
    return <Card key={cardObj.id} backgroundImage={cardObj.image}/>
  })

  return (
    <>
    <input id={`dealerToggle`} type='checkbox' onChange={() => handleDealerToggleClick(dispatch)}/>
    <div className={styles.pokerPane}>

      {currentHand.length === 5 && 
        <div className={styles.overlay}>
          <button className={styles.submitBtn} onClick={() => {handleSubmitHandClick(dispatch, currentHand)}}>SUBMIT HAND</button>
        </div>
      }
      
      <div className={`${styles.handWindow}`}>{currentHandCards}</div>
    </div>
    </>
    
  )
}
