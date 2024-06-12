import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        value: ''
    },
    reducers: {
        changeNotes: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeNotes } = notesSlice.actions;

export default notesSlice.reducer;
