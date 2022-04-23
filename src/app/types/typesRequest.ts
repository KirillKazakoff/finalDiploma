import { AppThunk } from '../redux/store';

export type RequestObj = {
    url: string;
    settings?: RequestInit;
};

export type RequestType = (reqObj: RequestObj, setStatus: any) => AppThunk<any | false>;
export type RequestTypeXhrT = (
    reqObj: {
        url: string;
        method: string;
        body?: any;
    },
    setStatus: any
) => AppThunk<any | false>;
