import { configureStore } from '@reduxjs/toolkit'
import resourcesReducer from '../reducers/recourcesSlice';
import producersReducer from '../reducers/producersSlice';
import kingdomCardsReducer from '../reducers/kingdomCardsSlice';
import deckReducer from '../reducers/deckSlice';
import pokerGameReducer from '../reducers/pokerGameSlice';
import modalReducer from '../reducers/modalSlice';


export default configureStore({
    reducer: {
        resources: resourcesReducer,
        producers: producersReducer,
        kingdomCards: kingdomCardsReducer,
        deck: deckReducer,
        pokerGame: pokerGameReducer,
        modal: modalReducer
    }
});