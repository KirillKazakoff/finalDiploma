import { createSlice } from '@reduxjs/toolkit';
import { initialInput, inputReducers } from '../reduxInputUtils';

export const subscribeSlice = createSlice({
    name: 'subscribe',
    initialState: { ...initialInput },
    reducers: {
        ...inputReducers,
    },
});

export const {
    setInput, setError, setActive, setBlured,
} = subscribeSlice.actions;

export default subscribeSlice.reducer;
