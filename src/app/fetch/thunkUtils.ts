import { setProgress } from '../redux/slices/loaderSlice';
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
            dispatch(setStatus('failed'));
        }
        return false;
    }
};

export const xhrRequest: RequestTypeXhrT = (reqObj, setStatus) => async (dispatch, getState) => {
    // const loaderState = getState().loader;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.withCredentials = true;
    const { method, body, url } = reqObj;

    const urlNew = '../../../../img/carriages/carriage-left.png';
    // fetch(urlNew).then((value) => console.log(value));

    // console.log(res.blob());
    // xhr.open(method, `${baseUrl}/routes/${url}`);
    xhr.open('GET', urlNew);
    xhr.send();

    // if (body) {
    //     xhr.send(body);
    // } else {
    //     xhr.send();
    // }

    xhr.onprogress = (e) => {
        console.log(e.loaded);
        console.log(e.total);
        // dispatch(setProgress(e.total / ))
    };

    xhr.onload = () => {
        console.log('loaded');
        console.log(xhr.response);
    };

    xhr.onerror = () => {
        console.log('error');
    };

    return true;
};
