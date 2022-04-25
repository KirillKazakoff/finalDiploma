/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { TopTypeT, WaysStateT, DatesStateT } from '../../../types/typesSlices';
import { formatDate } from './SearchDate/formatDate';

const getSearchSettings = (top: TopTypeT, ways: WaysStateT, dates: DatesStateT) => {
    try {
        const searchSettings = {
            // date_start: formatDate(dates.dateTo.value),
            // date_end: formatDate(dates.dateFrom.value),
            date_start: '2022-05-20',
            date_end: '2022-05-27',
            from_city_id: ways.wayFrom.cities[0]._id,
            to_city_id: ways.wayTo.cities[0]._id,
            offset: top.offset,
            sort: top.sort,
            limit: top.limit,
        };
        if (!ways.wayFrom.cities[0]._id || !ways.wayTo.cities[0]._id) {
            return false;
        }
        return searchSettings;
    } catch (e) {
        return false;
    }
};

export default getSearchSettings;
