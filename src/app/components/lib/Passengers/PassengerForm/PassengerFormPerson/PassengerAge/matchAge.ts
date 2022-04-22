export const matchAge = (is_adult: boolean, id: string) => {
    let res = '';
    switch (is_adult) {
        case true:
            res = 'Взрослый';
            break;

        case false:
            res = 'Детский';
            break;

        default:
            break;
    }

    if (id.includes('childform')) {
        res = 'Детский (без кресла)';
    }

    return res;
};
