/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PayloadInformation } from '../../types/typesPayload';
import type { RootState } from '../store';
import { InfoMsgT } from '../../components/lib/Common/Info/messagesInfo';

export type InformationStatusT = 'error' | 'note';

type InfoStateT = {
    isActive: boolean;
    status: InformationStatusT;
    msg: InfoMsgT;
};

const initialState: InfoStateT = {
    isActive: false,
    status: 'note',
    msg: {
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
            state.isActive = true;
            state.msg = msg;
            state.status = status;
        },
        setInfoActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload;
        },
    },
});

export const { setInfo, setInfoActive } = infoSlice.actions;

export const selectInfo = (state: RootState) => state.info;

export default infoSlice.reducer;
