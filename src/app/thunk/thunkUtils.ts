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

type RequestType = (reqObj: RequestObj, setStatus: any) => AppThunk<any | false>;

export const request: RequestType = (reqObj, setStatus) => async (dispatch) => {
    // await timeoutMock();

    try {
        const res = await fetch(`${baseUrl}/routes/${reqObj.url}`, reqObj.settings);
        if (!res.ok) throw new Error(res.statusText);

        const resData = await res.json();
        if (resData.error) return false;
        return resData;
    } catch (e) {
        if (e.name !== 'AbortError') {
            dispatch(setStatus('failed'));
        }
        return false;
    }
};
