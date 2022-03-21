import { RequestTypeXhrT } from '../types/typesRequest';

export const xhrRequest: RequestTypeXhrT = (reqObj, setStatus) => async (dispatch, getState) => {
    // const loaderState = getState().loader;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.withCredentials = true;
    const { method, body, url } = reqObj;

    const urlNew = './img/carriages/carriage-left.png';
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
