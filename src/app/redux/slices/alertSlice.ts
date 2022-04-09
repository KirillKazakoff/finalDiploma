/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InfoMsgT } from '../../components/lib/Common/Info/messagesInfo';
import type { RootState } from '../store';

type AlertResponseT = 'canceled' | 'accepted' | 'idle';

type AlertStateT = {
    isActive: boolean;
    status: AlertResponseT;
    msg: InfoMsgT;
};

const initialState: AlertStateT = {
    isActive: false,
    status: 'idle',
    msg: {
        title: '',
        desc: '',
    },
};

export const alertSlice = createSlice({
    name: 'alertSlice',
    initialState,
    reducers: {
        setStatus: (state, action: PayloadAction<AlertResponseT>) => {
            state.status = action.payload;
        },
        setAlertActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload;
        },
        setMsg: (state, action: PayloadAction<InfoMsgT>) => {
            state.msg = action.payload;
        },
    },
});

export const { setStatus, setAlertActive, setMsg } = alertSlice.actions;
export const selectAlert = (state: RootState) => state.alert;

export default alertSlice.reducer;
