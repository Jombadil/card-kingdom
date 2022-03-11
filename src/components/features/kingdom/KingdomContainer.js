import React from 'react'
import { useSelector } from 'react-redux';
import { selectKingdomCards } from '../../../reducers/kingdomCardsSlice';
import KingdomCard from './KingdomCard'

export default function KingdomContainer() {
    const kingdomCards = useSelector(selectKingdomCards)

    

    const listKingdomCards = kingdomCards.allKingdomCards.map((kingdomCard) => {
        return kingdomCard.toggles.unlocked ?
        <li key={kingdomCard.id}>
            <KingdomCard 
                name={kingdomCard.name} 
                level={kingdomCard.level}
                cost={kingdomCard.cost.currentCost}
                enabled={!kingdomCard.toggles.enabled}
                id={kingdomCard.id}
            ></KingdomCard>
        </li> : '';
    })

    return <ul>{listKingdomCards}</ul>
}
