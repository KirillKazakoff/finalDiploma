import { Duration, DateTime } from 'luxon';

export const getTrainHour = (dateSeconds: number) => {
    const dateTime = DateTime.fromMillis(dateSeconds * 1000);
    return dateTime.toFormat('HH:mm');
};

export const getTrainHourMs = (dateSeconds: number) => {
    const dateTime = DateTime.fromMillis(dateSeconds * 1000);
    const { hour, minute } = dateTime;
    const ms = hour * 3600000 + minute * 60000;

    return ms;
};

export const getDuration = (durationSeconds: number) => {
    const ms = durationSeconds * 1000;
    const duration = Duration.fromMillis(ms).shiftTo('days', 'hours', 'minutes');

    const durationStr = duration.days > 0
        ? duration.shiftTo('days').toHuman({ maximumFractionDigits: 0 })
        : duration.toFormat('h : m');

    return durationStr;
};
