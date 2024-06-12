import { createSlice } from '@reduxjs/toolkit';
import { E_OPTION } from '../../constants/constants';

export const optionsSlice = createSlice({
    name: 'options',
    initialState: {
        value: E_OPTION.OPTION_A,
    },
    reducers: {
        changeOption: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeOption } = optionsSlice.actions;

export default optionsSlice.reducer;
