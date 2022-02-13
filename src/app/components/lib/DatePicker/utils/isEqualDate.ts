import { DateT } from './timeTypes';

export default function isEqualDate(current: DateT, active: DateT, day: string) {
    return (
        current.year === active.year
        && current.month === active.month
        && day === active.day
    );
}
