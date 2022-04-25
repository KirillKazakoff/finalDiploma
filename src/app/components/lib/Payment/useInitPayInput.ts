import { useRef } from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { setError, selectField } from '../../../redux/slices/paymentFieldsSlice';
import useValidateInput from '../Common/Form/useValidateInput';

export const useInitPayInput = (name: string) => {
    const inputState = useAppSelector(selectField(name));
    const ref = useRef<HTMLInputElement>(null);
    const validate = useValidateInput(setError);

    return { ref, inputState, validate };
};
