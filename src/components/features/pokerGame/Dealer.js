import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPokerGame } from '../../../reducers/pokerGameSlice';
import { PokerCard } from '../../Card';
import { dealPokerCard, handleFloatingPokerCardClick } from '../../../actions/actions.js';

export default function Dealer() {
    const pokerGame = useSelector(selectPokerGame);
    const dispatch = useDispatch();

    useEffect(() => {
      const dealInterval = setInterval(() => {
        if (pokerGame.dealerToggle) {
          dealPokerCard(dispatch)
        }
      }, 1000)
    
      return () => {
        clearInterval(dealInterval)
      }
    })
    

    const dealtCards = pokerGame.currentDealtCards.map((card) => {
        return <div key={card.id} onClick={(event) => handleFloatingPokerCardClick(dispatch, card.id, event)}>
            <PokerCard 
              id={card.id}
              backgroundImage={card.image} 
              style={{zIndex: '2000'}}
            />
        </div>
    })

  return (
    <>
      {/* <button onClick={() => dealPokerCard(dispatch)}>add</button> */}
      <div style={{position: 'absolute', top: 100, left: 100}}>{dealtCards}</div>
    </>
    
  )
}