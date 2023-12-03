import { configureStore } from "@reduxjs/toolkit";
import {habitsReducer} from './reducers/habitsReducer';

const store = configureStore({
    reducer: {
        habitsReducer
    }
})

export default store;