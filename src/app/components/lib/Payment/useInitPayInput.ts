import { useRef } from 'react';
import useValidateInput from '../../../form/useValidateInput';
import { useAppSelector } from '../../../redux/reduxHooks';
import { setError, selectField } from '../../../redux/slices/paymentFieldsSlice';

export const useInitPayInput = (name: string) => {
    const inputState = useAppSelector(selectField(name));
    const ref = useRef<HTMLInputElement>(null);
    const validate = useValidateInput(setError);

    return { ref, inputState, validate };
};
