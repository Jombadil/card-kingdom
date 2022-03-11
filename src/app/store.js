import { configureStore } from '@reduxjs/toolkit'
import resourcesReducer from '../reducers/recourcesSlice';
import producersReducer from '../reducers/producersSlice';
import kingdomCardsReducer from '../reducers/kingdomCardsSlice';
import pokerGameReducer from '../reducers/pokerGameSlice';


export default configureStore({
    reducer: {
        resources: resourcesReducer,
        producers: producersReducer,
        kingdomCards: kingdomCardsReducer,
        pokerGame: pokerGameReducer
    }
});