import { createSlice } from '@reduxjs/toolkit';
import { initialCardDeck } from '../initialStates/kingdomCards';

// Slice Object ///////////////////////////////////////

export const cardDeckSlice = createSlice({
    name: "cardDeck",
    initialState: initialCardDeck,
    reducers: {
      addCardToCardDeck: (state, action) => {
      }
    },
});


// Exports ///////////////////////////////////////

export const selectCardDeck = (state) => state.cardDeck;
export const { addCardToCardDeck } = cardDeckSlice.actions;

export default cardDeckSlice.reducer;