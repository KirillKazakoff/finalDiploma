import { RequestType, RequestTypeXhrT } from '../types/typesRequest';

const baseUrl = 'http://80.87.192.113:3001';

function timeoutMock() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('ok'), 1000);
    });
}

export const request: RequestType = (reqObj, setStatus) => async (dispatch) => {
    // await timeoutMock();

    try {
        const res = await fetch(`${baseUrl}/routes/${reqObj.url}`, reqObj.settings);
        if (!res.ok) throw new Error(res.statusText);

        const resData = await res.json();
        if (resData.error) throw new Error(resData.error);
        return resData;
    } catch (e) {
        if (e.name !== 'AbortError') {
            console.log(e);
            dispatch(setStatus('failed'));
        }
        return false;
    }
};
