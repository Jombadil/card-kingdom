import { createSlice } from '@reduxjs/toolkit';
import { initialResources } from '../initialStates/resources';


// Slice Object
///////////////////////////////////////
export const resourcesSlice = createSlice({
    name: "resources",
    initialState: initialResources,
    reducers: {
      addCards: (state, action) => {
        state.cards.amount = state.cards.amount + action.payload
      },
      subtractCards: (state, action) => {
        state.cards.amount = state.cards.amount - action.payload
      },
      setCps: (state, action) => {
        state.cards.cps = action.payload;
      }
    },
  });
  
  // Selectors
  ///////////////////////////////////////
  export const selectResources = (state) => state.resources;
  
  
  // Exports
  ///////////////////////////////////////
  export const { addCards, subtractCards, setCps } = resourcesSlice.actions;
  
  export default resourcesSlice.reducer;



  