import { setBlured as setBluredWay } from '../../../../redux/slices/searchWaySlice';

import { setBlured as setBluredDate } from '../../../../redux/slices/searchDateSlice';
import { AppThunk } from '../../../../redux/store';

type T = () => AppThunk;

export const refreshFields: T = () => async (dispatch, getState) => {
    const state = getState();

    Object.keys(state.searchWay).forEach((key) => {
        dispatch(setBluredWay({ wasFocused: false, name: key, isActive: false }));
    });

    Object.keys(state.searchDate).forEach((key) => {
        dispatch(setBluredDate({ name: key, wasFocused: false, isActive: false }));
    });
};
