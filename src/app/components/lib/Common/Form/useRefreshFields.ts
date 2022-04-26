import { setBlured as setBluredWay } from '../../../../redux/slices/searchWaySlice';
import { setBlured as setBluredDate } from '../../../../redux/slices/searchDateSlice';
import { setBlured as setBluredPay } from '../../../../redux/slices/paymentFieldsSlice';
import { setBlured as setBluredPassenger } from '../../../../redux/slices/passengersSlice';

import { AppThunk } from '../../../../redux/store';

type T = () => AppThunk;

export const refreshFields: T = () => async (dispatch, getState) => {
    const state = getState();

    Object.keys(state.searchWay).forEach((key) => {
        dispatch(setBluredWay({ name: key, wasFocused: false }));
    });

    Object.keys(state.searchDate).forEach((key) => {
        dispatch(setBluredDate({ name: key, wasFocused: false }));
    });

    Object.keys(state.paymentFields).forEach((key) => {
        dispatch(setBluredPay({ name: key, wasFocused: false }));
    });

    Object.entries(state.passengers).forEach(([id, form]) => {
        Object.keys(form.fields).forEach((key) => {
            dispatch(setBluredPassenger({ name: key, wasFocused: false, id }));
        });
    });
};
