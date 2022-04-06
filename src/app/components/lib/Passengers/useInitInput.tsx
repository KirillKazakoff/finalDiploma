import { useRef } from 'react';
import useValidateInput from '../../../form/useValidateInput';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectField, setError } from '../../../redux/slices/passengersSlice';

export const useInitInput = (id: string, name: string) => {
    const inputState = useAppSelector(selectField(id, name));
    const ref = useRef<HTMLInputElement>(null);
    const validate = useValidateInput(setError, id);

    return { ref, inputState, validate };
};
