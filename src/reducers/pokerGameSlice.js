import { createSlice } from '@reduxjs/toolkit';
import { initialPokerGame } from '../initialStates/pokerGame';

// Slice Object ///////////////////////////////////////

export const pokerGameSlice = createSlice({
    name: "pokerGameSlice",
    initialState: initialPokerGame,
    reducers: {
      addCardToHand: (state, action) => {
        state.currentHand.push(action.payload)
      },
      resetHand: (state) => {
        state.currentHand = []
      },
      addCardToCardsDealt: (state, action) => {
        state.cardsDealt.push(action.payload)
      },
      resetCardsDealt: (state) => {
        state.cardsDealt = [];
      },
      addCardToCurrentDealtCards: (state, action) => {
        state.currentDealtCards.push(action.payload);
      },
      removeCardToCurrentDealtCards: (state, action) => {
        state.currentDealtCards = state.currentDealtCards.filter(card => card.id !== action.payload.id);
      }
    },
});


// Exports ///////////////////////////////////////

export const selectPokerGame = (state) => state.pokerGame;
export const { addCardToHand, resetHand, addCardToCardsDealt, resetCardsDealt, addCardToCurrentDealtCards, removeCardToCurrentDealtCards } = pokerGameSlice.actions;

export default pokerGameSlice.reducer;