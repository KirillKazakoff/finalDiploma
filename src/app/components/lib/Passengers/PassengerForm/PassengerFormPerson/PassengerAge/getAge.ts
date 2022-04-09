import { DateTime } from 'luxon';

export const getAge = (date: string) => {
    const birth = DateTime.fromFormat(date, 'dd/LL/yyyy');
    if (!birth.isValid) return false;

    const now = DateTime.now();
    const diff = now.diff(birth, 'years');

    const years = Math.floor(diff.toObject().years);
    return years;
};
