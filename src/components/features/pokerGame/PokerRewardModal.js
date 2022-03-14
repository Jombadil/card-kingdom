import React from 'react'
import { PLAYING_CARDS } from '../../../gameObjects/defaultPlayingCards'
import { Card } from '../../Card'

import styles from './pokerGame.module.css'

export default function PokerRewardModal({rewardObj}) {
    console.log(rewardObj)

    const handCards = rewardObj.hand.map((card) => {
        console.log(PLAYING_CARDS.find((playingCard) => playingCard.id === card).image);
        return <Card key={`payout${card}`} backgroundImage={PLAYING_CARDS.find((playingCard) => playingCard.id === card).image} />
    })
  return (
    <div className={styles['payout-modal-card-container']}>{handCards}</div>
  )
}
