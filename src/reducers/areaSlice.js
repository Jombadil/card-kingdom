import { createSlice } from "@reduxjs/toolkit";
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
          console.log(state, action.payload)
      }
    }
});

export const selectArea = (state) => state.area;
export const { setArea, changeHealth } = areaSlice.actions;

export default areaSlice.reducer;
