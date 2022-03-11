import { createSlice } from '@reduxjs/toolkit';
import { initialKingdomCards } from '../initialStates/kingdomCards';
import { calcCost } from '../Utils';


// Slice Object ///////////////////////////////////////

export const kingdomCardsSlice = createSlice({
    name: "kingdomCards",
    initialState: initialKingdomCards,
    reducers: {
      addKingdomCard: (state, action) => {
        state.allKingdomCards[action.payload].level++;
      },

      setKingdomCardCost: (state, action) => {
        const kingdomCard = state.allKingdomCards[action.payload];
        kingdomCard.cost.currentCost = calcCost(kingdomCard.cost.baseCost, kingdomCard.cost.costIncrease, kingdomCard.level)
      },

      checkKingdomToggleStates: (state, action) => {
        for (let i = 0; i < state.allKingdomCards.length; i++) {
          const kingdomCard = state.allKingdomCards[i];

          // LOCK STATE
          if (!kingdomCard.toggles.unlocked) { // If it is still locked... 
            if (action.payload >= (.8 * kingdomCard.cost.currentCost)) {
              kingdomCard.toggles.unlocked = true;
            }
          }

          // ENABLED STATE
          kingdomCard.toggles.enabled = (action.payload >= kingdomCard.cost.currentCost) ? true : false;

        }
      }
    },
});


// Exports ///////////////////////////////////////

export const selectKingdomCards = (state) => state.kingdomCards;
export const { addKingdomCard, setKingdomCardCost, checkKingdomToggleStates } = kingdomCardsSlice.actions;

export default kingdomCardsSlice.reducer;