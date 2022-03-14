import { createSlice } from '@reduxjs/toolkit';
import { initialDeck } from '../initialStates/deck.js';

// Slice Object ///////////////////////////////////////

export const deckSlice = createSlice({
    name: "deck",
    initialState: initialDeck,
    reducers: {
      addCardToDeck: (state, action) => {
        
      }
    },
});


// Exports ///////////////////////////////////////

export const selectDeck = (state) => state.deck;
export const { addCardToDeck } = deckSlice.actions;

export default deckSlice.reducer;