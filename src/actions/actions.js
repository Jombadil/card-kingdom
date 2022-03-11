import store from '../app/store.js';
import { addKingdomCard, checkKingdomToggleStates, setKingdomCardCost } from '../reducers/kingdomCardsSlice.js';
import { addCardToCardsDealt, addCardToCurrentDealtCards, addCardToHand, resetHand, removeCardToCurrentDealtCards, resetCardsDealt } from '../reducers/pokerGameSlice.js';
import { setTotalProducerProduction, checkProdToggleStates, addProducer, setProducerCost } from '../reducers/producersSlice.js';
import { addCards, setCps, subtractCards } from '../reducers/recourcesSlice.js';
import { calcProduction, currentCardAmount } from '../Utils.js';
import { randCard, scorePokerHand } from '../components/features/pokerGame/pokerGameFunctions.js';
import { PLAYING_CARDS } from '../gameObjects/defaultPlayingCards.js';


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
    const handScoreObj = scorePokerHand(currentHand);
    console.log(handScoreObj)
    dispatch(addCards(handScoreObj.cardAmount))
    dispatch(resetHand())
}