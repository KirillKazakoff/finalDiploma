import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { FetchStatusT } from '../types/typesPayload';
import { AppThunk } from '../redux/store';

const baseUrl = 'https://fe-diplom.herokuapp.com';

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
    // setStatus: ActionCreatorWithPayload<FetchStatusT, string>
    setStatus: any
) => AppThunk<Promise<false | Response | 'aborted'>>;

export const request: RequestType = (reqObj, setStatus) => async (dispatch) => {
    // await timeoutMock();

    try {
        const res = await fetch(`${baseUrl}/routes/${reqObj.url}`, reqObj.settings);
        if (!res.ok) throw new Error(res.statusText);
        return res;
    } catch (e) {
        if (e.name === 'AbortError') {
            return 'aborted';
        }
        dispatch(setStatus('failed'));
        return false;
    }
};

function getUrl<T>(params: T[], query: string) {
    const searchParams = new URLSearchParams();
    params.forEach((param) => {
        const [[key, value]] = Object.entries(param);

        if (value || typeof value === 'number') {
            searchParams.append(key, value.toString());
        }
    }, '');

    let url = query;
    if (searchParams) url += `?${searchParams.toString()}`;
    return url;
}

export function getCitiesUrl(name: string) {
    type ParamT = { name: string };
    const params = [{ name }];

    const url = getUrl<ParamT>(params, 'cities');
    return url;
}
