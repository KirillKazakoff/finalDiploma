import { DateTime } from 'luxon';

const formatDate = (date: string) => {
    const dateTime = DateTime.fromFormat(date, 'dd/LL/yy');
    return dateTime.toFormat('yyyy-LL-dd');
};

export default formatDate;
