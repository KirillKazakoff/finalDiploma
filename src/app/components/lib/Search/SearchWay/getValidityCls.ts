import { getValidityCls } from '../../../../form/getValidityCls';
import { WayStateT } from '../../../../types/typesSlices';

export const getWayValidityCls = (wayState: WayStateT) => {
    let validityCls = getValidityCls(wayState);
    if (wayState.status === 'loading') validityCls = 'invalid';

    return validityCls;
};
