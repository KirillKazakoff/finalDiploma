import { useRef } from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectField, setError } from '../../../redux/slices/passengersSlice';
import useValidateInput from '../Common/Form/useValidateInput';

export const useInitInput = (id: string, name: string) => {
    const inputState = useAppSelector(selectField(id, name));
    const ref = useRef<HTMLInputElement>(null);
    const validate = useValidateInput(setError, id);

    return { ref, inputState, validate };
};
