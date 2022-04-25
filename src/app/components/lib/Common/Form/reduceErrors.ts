import { InputState } from '../../../../redux/slices/utils/reduxInputUtils';

export const reduceErrors = (states: InputState[]) => {
    return states.reduce<string[]>((total, state) => {
        total.push(state.error);
        total.push(state.formError);
        return total;
    }, []);
};
