import { createSlice } from '@reduxjs/toolkit';
import { initialModal } from '../initialStates/modal.js';

// Slice Object ///////////////////////////////////////

export const modalSlice = createSlice({
    name: "modalSlice",
    initialState: initialModal,
    reducers: {
      toggleModal: (state) => {
        state.toggleModal = !state.toggleModal
      },
      changeModalContent: (state, action) => {
        console.log(action.payload)
        state.header = action.payload.header;
        state.content = action.payload.content;
        state.footer = action.payload.footer;
      }
    }
});


// Exports ///////////////////////////////////////

export const selectModal = (state) => state.modal;
export const { toggleModal, changeModalContent } = modalSlice.actions;

export default modalSlice.reducer;