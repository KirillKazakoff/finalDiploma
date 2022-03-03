import { Duration, DateTime } from 'luxon';

export const getTrainRouteTime = (dateSeconds: number) => {
    const dateTime = DateTime.fromMillis(dateSeconds * 1000);
    return dateTime.toFormat('HH:mm');
};

export const getDurationTime = (durationSeconds: number) => {
    const ms = durationSeconds * 1000;
    const duration = Duration.fromMillis(ms).shiftTo('days', 'hours', 'minutes');

    const durationStr = duration.days > 0
        ? duration.shiftTo('days').toHuman({ maximumFractionDigits: 0 })
        : duration.toFormat('h : m');

    return durationStr;
};

getDurationTime(200000);
export default getTrainRouteTime;
