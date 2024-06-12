import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './redux/notes/notesSlice';
import optionsReducer from './redux/options/optionsSlice';

const store = configureStore({
    reducer: {
        notes: notesReducer,
        options: optionsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
