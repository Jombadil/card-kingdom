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
      setCurrentEncounter: (state, action) => {
        state.currentEncounter = action.payload
      },
      clearCurrentEncounter: (state) => {
        state.currentEncounter = []
      },
      changeHealth: (state, action) => {
        const teamCardGroup = state[`${action.payload.team}`];
        const cardIndex = teamCardGroup.findIndex((card) => card.id === action.payload.id)
        teamCardGroup[cardIndex].health.currentHealth = action.payload.newHealth;
      },
      toggleCardDeath: (state, action) => {
        const teamCardGroup = state[`${action.payload.team}`];
        const cardIndex = teamCardGroup.findIndex((card) => card.id === action.payload.id)
        teamCardGroup[cardIndex].dead = !teamCardGroup[cardIndex].dead;
      },
      toggleFighting: (state) => {
        state.fighting = !state.fighting;
      }
    }
});

export const selectArea = (state) => state.area;
export const { setArea, changeHealth, toggleFighting, toggleCardDeath, setCurrentEncounter, clearCurrentEncounter } = areaSlice.actions;

export default areaSlice.reducer;
