/* eslint-disable @typescript-eslint/indent */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import searchWayReducer from './slices/searchWaySlice';
import searchDateReducer from './slices/searchDateSlice';
import searchFormReducer from './slices/searchFormSlice';
import ticketsReducer from './slices/ticketsSlice';
import searchFilterReducer from './slices/searchFilterSlice';
import lastTicketsReducer from './slices/lastTicketsSlice';
import loaderReducer from './slices/loaderSlice';
import subscribeReducer from './slices/subscribeSlice';
import placesReducer from './slices/placesSlice';
import { saveToLocalStorage, loadFromLocalStorage } from './storeLoaderUtils';
import passengerReducer from './slices/passengersSlice';
import infoReducer from './slices/infoSlice';
import alertReducer from './slices/alertSlice';
import pasPlacesReducer from './slices/pasPlacesSlice';

const preloadedState = loadFromLocalStorage();

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
        info: infoReducer,
        alert: alertReducer,
        subscribe: subscribeReducer,

        searchForm: searchFormReducer,
        searchFilter: searchFilterReducer,
        searchWay: searchWayReducer,
        searchDate: searchDateReducer,

        tickets: ticketsReducer,
        lastTicketsSlice: lastTicketsReducer,
        places: placesReducer,
        passengers: passengerReducer,
        pasPlaces: pasPlacesReducer,
    },
    preloadedState,
});

window.addEventListener('beforeunload', () => {
    saveToLocalStorage(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
