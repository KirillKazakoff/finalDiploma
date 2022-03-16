import { SortTypeT } from '../../../../types/typesSlices';

const mapIdToName = (id: SortTypeT) => {
    if (id === 'date') return 'времени';
    if (id === 'duration') return 'длительности';
    if (id === 'price') return 'стоимости';
    return '';
};

export default mapIdToName;
