import axios from 'axios';

const baseUrl = 'http://80.87.192.113:3001';

export const getLoad = (url: string) => {
    const config = {
        onDownloadProgress: (e: ProgressEvent) => {
            const percentCompleted = Math.floor((e.loaded * 100) / e.total);
            console.log(percentCompleted);
        },
    };

    console.log('started');
    axios.get(`${baseUrl}/routes/${url}`, config);
};
