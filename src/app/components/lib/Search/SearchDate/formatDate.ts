import { DateTime } from 'luxon';

const formatDate = (date: string) => {
    const dateTime = DateTime.fromFormat(date, 'dd/LL/yy');
    if (!dateTime.isValid) return '';
    return dateTime.toFormat('yyyy-LL-dd');
};

export default formatDate;
