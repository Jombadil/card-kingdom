import React from 'react'
import { useSelector } from 'react-redux'
import { selectDeck } from '../../../reducers/deckSlice'
import { getDeckCardBG } from '../../../Utils'
import { DeckCard } from '../../Card'
import styles from './deck.module.css'

export default function DeckContainer() {
    const deck = useSelector(selectDeck)

    const CardFront = ({card}) => {
        let image = getDeckCardBG(card.class)
        return <div className={styles['card-front']} style={{backgroundImage: image}}></div>
    }

    const cards = deck.currentDeck.map((card) => {
        return <DeckCard key={card.name} 
            front={<CardFront card={card}/>} 
            back={'hello'}
            style={{margin: '5px'}}
            className={styles['deck-card']}
        />
    })
  return (
    <div className={styles['cards-container']}>{cards}</div>
  )
}
