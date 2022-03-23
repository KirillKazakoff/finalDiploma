/* eslint-disable no-underscore-dangle */
import { TopTypeT, WaysStateT, DatesStateT } from '../../../types/typesSlices';
import formatDate from './SearchDate/formatDate';

const getSearchSettings = (top: TopTypeT, ways: WaysStateT, dates: DatesStateT) => {
    const searchSettings = {
        date_start: formatDate(dates.dateTo.value),
        date_end: formatDate(dates.dateFrom.value),
        from_city_id: ways.wayFrom.cities[0]._id,
        to_city_id: ways.wayTo.cities[0]._id,
        offset: top.offset,
        sort: top.sort,
        limit: top.limit,
    };

    // || !dates.dateTo.value
    if (!ways.wayFrom.cities[0]._id || !ways.wayTo.cities[0]._id) {
        return false;
    }
    return searchSettings;
};

export default getSearchSettings;
