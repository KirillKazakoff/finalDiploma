import { DateTime } from 'luxon';

export const formatDate = (date: string) => {
    const dateTime = DateTime.fromFormat(date, 'dd/LL/yy');
    if (!dateTime.isValid) return '';
    return dateTime.toFormat('yyyy-LL-dd');
};

export const formatDateNumber = (date: number) => {
    const dateTime = DateTime.fromMillis(date * 1000);
    return dateTime.toFormat('dd.LL.yyyy');
};
export default formatDate;
