import store from '../app/store.js';
import { addKingdomCard, checkKingdomToggleStates, setKingdomCardCost } from '../reducers/kingdomCardsSlice.js';
import { addCardToCardsDealt, addCardToCurrentDealtCards, addCardToHand, resetHand, removeCardToCurrentDealtCards, resetCardsDealt, dealerToggle } from '../reducers/pokerGameSlice.js';
import { setTotalProducerProduction, checkProdToggleStates, addProducer, setProducerCost } from '../reducers/producersSlice.js';
import { addCards, setCps, subtractCards } from '../reducers/recourcesSlice.js';
import { calcProduction, currentCardAmount } from '../Utils.js';
import { randCard, scorePokerHand } from '../components/features/pokerGame/pokerGameFunctions.js';
import { PLAYING_CARDS } from '../gameObjects/defaultPlayingCards.js';
import { changeModalContent, toggleModal } from '../reducers/modalSlice.js';
import PokerRewardModal from '../components/features/pokerGame/PokerRewardModal.js';
import { changeHealth, clearCurrentEncounter, setCurrentEncounter, toggleFighting } from '../reducers/areaSlice.js';
import { checkTeamDeath, getTargetList, handleAttackOrder, startFightInterval } from '../components/features/areaExploration/battleFunctions.js';
import { encounter } from '../components/features/areaExploration/testEncounter.js';


export const handleBigCardClick = (dispatch) => {
    dispatch(addCards(10))
    dispatch(checkProdToggleStates(store.getState().resources.cards.amount))
}

export const handleProducerBtnClick = (dispatch, e, cost, kingdomCards) => {
    if (currentCardAmount() >= cost) {
        dispatch(addProducer(e.target.id))
        dispatch(setProducerCost(e.target.id))
        dispatch(subtractCards(cost))
        dispatch(setTotalProducerProduction(calcProduction(store.getState().producers, kingdomCards)))
        dispatch(setCps(store.getState().producers.totalProducerProduction))
        dispatch(checkProdToggleStates(currentCardAmount()))
    }
}

export const handleKingdomCardUpgrade = (dispatch, e, cost, id) => {
    if (currentCardAmount() >= cost) {
        dispatch(addKingdomCard(id))
        dispatch(setKingdomCardCost(id))
        dispatch(subtractCards(cost))
        dispatch(setTotalProducerProduction(calcProduction(store.getState().producers, store.getState().kingdomCards)))
        dispatch(setCps(store.getState().producers.totalProducerProduction))
        dispatch(checkKingdomToggleStates(currentCardAmount()))
    }
}

export const tickActions = (dispatch, producers) => {
        dispatch(addCards(producers.totalProducerProduction))
        dispatch(checkProdToggleStates(currentCardAmount()))
        dispatch(checkKingdomToggleStates(currentCardAmount()))
}


export const dealPokerCard = (dispatch) => {
    let card;
    let attempts = 0;

    // If all cards have been played, reset played cards
    if (store.getState().pokerGame.cardsDealt.length === PLAYING_CARDS.length) {
        dispatch(resetCardsDealt());
        for (let i = 0; i < store.getState().pokerGame.currentHand.length; i++) {
            dispatch(addCardToCardsDealt(store.getState().pokerGame.currentHand[i]))
        }
    }

    // get the "next random" card that has not been played
    do {
        card = randCard();
        attempts += 1; // Attempts prevent an infinte loop
    } while (store.getState().pokerGame.cardsDealt.includes(card.id) && attempts <= 20)

    // add the card to the currentDealtCards & cardsDealt
    if (!store.getState().pokerGame.cardsDealt.includes(card.id)) {
        dispatch(addCardToCurrentDealtCards(card))
        dispatch(addCardToCardsDealt(card.id))
    }

    // remove card after 3 seconds
    setTimeout(() => {
        dispatch(removeCardToCurrentDealtCards(card))
    }, 3000);
    
}

export const handleFloatingPokerCardClick = (dispatch, cardID, event) => {
    if(store.getState().pokerGame.currentHand.length < 5) {
        if(!store.getState().pokerGame.currentHand.includes(cardID)) {
            event.target.style.display = 'none'; // SUPER Janky way of doing this...
            dispatch(addCardToHand(cardID))
        } else {console.log('hey')}
    } else {alert('Ya got 5 cards already')}
    
    
}

export const handleSubmitHandClick = (dispatch, currentHand) => {
    const rewardObj = scorePokerHand(currentHand);
    // console.log(rewardObj)
    // const guts = <PokerRewardModal rewardObj={{header: 'Poker asdf', hand: ['AD', 'KD', 'QD', 'JD', 'TD']}}/>
    // dispatch(changeModalContent({header: 'Poker asdf', content: guts}))
    // handleModalToggle(dispatch)
    dispatch(addCards(rewardObj.cardAmount))
    dispatch(resetHand())
}

export const handleDealerToggleClick = (dispatch) => {
    dispatch(dealerToggle())
}

export const handleModalToggle = (dispatch) => {
    dispatch(toggleModal())
}

export const handleFightToggle = (dispatch) => {
    dispatch(toggleFighting())
}

export const handleFightInterval = (dispatch, area) => {

    if (checkTeamDeath(area.currentEncounter)) {
        dispatch(clearCurrentEncounter())
        dispatch(toggleFighting())
        return
    }

    // Get team targets in order of descending health
    let heroes = getTargetList(area.currentHeroes)
    let enemies = getTargetList(area.currentEncounter)
    // Handle Team Attacks

    handleAttackOrder(heroes, enemies, 'currentEncounter', dispatch)
    
    // dispatch(changeHealth(handleAttackOrder(heroes, enemies, 'currentEncounter', dispatch)))
    // dispatch(changeHealth(handleAttackOrder(enemies, heroes, 'currentHeroes')))
    
}

export const toggleFight = (dispatch) => {
    dispatch(toggleFighting());
}

export const setEncounter = (dispatch, area) => {
    dispatch(setCurrentEncounter(area.encounters[0].enemyCards))
}

export const clearEncounter = (dispatch) => {
    dispatch(clearCurrentEncounter())
}