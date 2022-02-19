import { WayStateT } from '../../../../redux/slices/searchWaySlice';

const getValidityCls = (wayState: WayStateT) => {
    const {
        error, isFormError, status, cities, value,
    } = wayState;
    let validityCls = 'valid';

    if (error) validityCls = 'invalid';
    if (status === 'loading') validityCls = 'invalid';

    if (cities.some((city) => city.name === value.trim())) {
        validityCls = 'valid';
    }

    if (isFormError) {
        validityCls = 'invalid';
    }
    return validityCls;
};

export default getValidityCls;
