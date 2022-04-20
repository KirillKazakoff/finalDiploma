/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type LocationT = {
    key: string;
    wasOrderSucceded: boolean;
};

type LocationsState = {
    locations: LocationT[];
    // isOrderSucceded: boolean;
};

const initialState: LocationsState = {
    locations: [],
    // isOrderSucceded: false,
};

export const locationSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        pushLocation: (state, action: PayloadAction<LocationT>) => {
            state.locations.push(action.payload);
        },
        setOrderSuccess: (state) => {
            state.locations = state.locations.map((location) => {
                const copyLoc = { ...location };
                copyLoc.wasOrderSucceded = true;
                return copyLoc;
            });
        },
        refreshLocations: () => initialState,
        // refreshLocations: (state, action: PayloadAction<boolean>) => {
        //     state.locations.splice(0, state.locations.length - 1);
        //     state.locations[0].wasOrderSucceded = true;
        // },
    },
});

export const { pushLocation, setOrderSuccess, refreshLocations } = locationSlice.actions;

export const selectLocations = (state: RootState) => state.locations.locations;
// export const selectIsOrderSucceded = (state: RootState) => state.locations.isOrderSucceded;

export default locationSlice.reducer;
