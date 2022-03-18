import { createSlice, current } from "@reduxjs/toolkit";
import { initialArea } from "../initialStates/area";

export const areaSlice = createSlice({
    name: "area",
    initialState: initialArea,
    reducers: {
      setArea: (state, action) => {
        state = {
            name: action.payload.name,
            level: action.payload.level,
            encounters: action.payload.encounters,
            currentEncounter: action.payload.currentEncounter,
            completionPayout: action.payload.completionPayout
        }
      },
      changeHealth: (state, action) => {
        let teamCardGroup = state[`${action.payload.shift()}`];

        console.log(current(teamCardGroup), action.payload)

        for (let i = 0; i < action.payload.length; i++) {
          let cardIndex = teamCardGroup.findIndex((card) => card.id === action.payload[i].targetID);
          teamCardGroup[cardIndex].health.currentHealth = action.payload[i].newHealth;
        }
      },
      toggleFighting: (state) => {
        state.fighting = !state.fighting;
      }
    }
});

export const selectArea = (state) => state.area;
export const { setArea, changeHealth, toggleFighting } = areaSlice.actions;

export default areaSlice.reducer;
