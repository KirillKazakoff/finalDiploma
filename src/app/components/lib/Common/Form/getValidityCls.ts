import { InputState } from '../../../../redux/slices/utils/reduxInputUtils';

export const getValidityCls = (inputState: InputState) => {
    const { error, formError } = inputState;
    let validityCls = 'valid';

    if (error) validityCls = 'invalid';

    if (formError) {
        validityCls = 'invalid';
    }
    return validityCls;
};
