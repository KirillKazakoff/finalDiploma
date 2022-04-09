/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PayloadInformation, PayloadAlert } from '../../types/typesPayload';
import type { RootState } from '../store';
import { InfoMsgT } from '../../components/lib/Common/Info/messagesInfo';

export type InformationStatusT = 'error' | 'note';

type InfoStateT = {
    isActive: boolean;
    status: InformationStatusT;
    msg: InfoMsgT;

    isAlertActive: boolean;
    alertMsg: InfoMsgT;
};

const initialState: InfoStateT = {
    isActive: false,
    status: 'note',
    msg: {
        title: '',
        desc: '',
    },

    isAlertActive: false,
    alertMsg: {
        title: '',
        desc: '',
    },
};

export const infoSlice = createSlice({
    name: 'infoSlice',
    initialState,
    reducers: {
        setInfo: (state, action: PayloadAction<PayloadInformation>) => {
            const { msg, status } = action.payload;
            state.msg = msg;
            state.status = status;
            state.isActive = true;
        },
        setInfoActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload;
        },

        setAlert: (state, action: PayloadAction<PayloadAlert>) => {
            const { alertMsg } = action.payload;
            state.alertMsg = alertMsg;
            state.isAlertActive = true;
        },
        setAlertActive: (state, action: PayloadAction<boolean>) => {
            state.isAlertActive = action.payload;
        },
    },
});

export const {
    setInfo, setInfoActive, setAlert, setAlertActive,
} = infoSlice.actions;

export const selectInfo = (state: RootState) => state.info;
export const selectAlert = (state: RootState) => state.info;

export default infoSlice.reducer;
