import { InputState } from '../../../../redux/reduxFormUtils';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';

export const getValidityCls = (inputState: InputState) => {
    const { error, isFormError } = inputState;
    let validityCls = 'valid';

    if (error) validityCls = 'invalid';

    if (isFormError) {
        validityCls = 'invalid';
    }
    return validityCls;
};

export const getWayValidityCls = (wayState: WayStateT) => {
    let validityCls = getValidityCls(wayState);
    if (wayState.status === 'loading') validityCls = 'invalid';

    return validityCls;
};
