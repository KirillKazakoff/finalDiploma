import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Status } from '../types';
import { AppThunk } from '../redux/store';

const baseUrl = 'http://localhost:7070';

function timeoutMock() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('ok'), 1000);
    });
}

export type RequestObj = {
    url: string;
    settings: RequestInit | undefined;
};

type RequestType = (
    reqObj: RequestObj,
    setStatus: ActionCreatorWithPayload<Status, string>
) => AppThunk<Promise<false | Response>>;

export const request: RequestType = (reqObj, setStatus) => async (dispatch) => {
    await timeoutMock();

    try {
        const res = await fetch(`${baseUrl}/api/${reqObj.url}`, reqObj.settings);
        if (!res.ok) throw new Error(res.statusText);
        return res;
    } catch (e) {
        dispatch(setStatus('failed'));
        return false;
    }
};

export function getCitiesUrl(name: string) {
    const params = [{ name }];

    const searchParams = new URLSearchParams();
    params.forEach((param) => {
        const [[key, value]] = Object.entries(param);

        if (value || typeof value === 'number') {
            searchParams.append(key, value.toString());
        }
    }, '');

    let url = 'cities';
    if (searchParams) url += `?${searchParams.toString()}`;

    return url;
}
