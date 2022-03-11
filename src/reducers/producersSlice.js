import { createSlice } from '@reduxjs/toolkit';
import { initialProducers } from '../initialStates/producers';
import { calcCost } from '../Utils';


// Slice Object ///////////////////////////////////////

export const producersSlice = createSlice({
    name: "producers",
    initialState: initialProducers,
    reducers: {

      setTotalProducerProduction: (state, action) => {
        state.totalProducerProduction = action.payload
      },

      addProducer: (state, action) => {
        state.allProducers[action.payload].production.count++;
      },

      setProducerCost: (state, action) => {
        const producer = state.allProducers[action.payload];
        producer.cost.currentCost = calcCost(producer.cost.baseCost, producer.cost.costIncrease, producer.production.count)
      },

      checkProdToggleStates: (state, action) => {
        for (let i = 0; i < state.allProducers.length; i++) {
          const producer = state.allProducers[i];

          // LOCK STATE
          if (!producer.toggles.unlocked) { // If it is still locked... 
            if (action.payload >= (.8 * producer.cost.currentCost)) {
              producer.toggles.unlocked = true;
            }
          }

          // ENABLED STATE
          producer.toggles.enabled = (action.payload >= producer.cost.currentCost) ? true : false;

        }
      }

    }
});


// Exports ///////////////////////////////////////

export const selectProducers = (state) => state.producers;
export const { setTotalProducerProduction, addProducer, setProducerCost, checkProdToggleStates } = producersSlice.actions;

export default producersSlice.reducer;