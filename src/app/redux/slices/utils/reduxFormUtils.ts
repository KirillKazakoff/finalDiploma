/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PayloadFormMsg, PayloadFormStatus } from '../../../types/typesPayload';

export type FormStatusT = 'error' | 'success' | 'idle';

type FormStateT = {
    isMsgHidden: boolean;
    statusValidity: FormStatusT;
};

export const formInitialState: FormStateT = {
    isMsgHidden: true,
    statusValidity: 'idle',
};

export const formReducers = {
    setFormStatus: (state: any, action: PayloadAction<PayloadFormStatus>) => {
        const { id, status } = action.payload;

        if (id) state[id].statusValidity = status;
        else state.statusValidity = status;
    },
    setFormMsgHidden: (state: any, action: PayloadAction<PayloadFormMsg>) => {
        const { id, isHidden } = action.payload;

        if (id) state[id].isMsgHidden = isHidden;
        else state.isMsgHidden = isHidden;
    },
};
