import React, { useRef, useEffect } from 'react';
import Feedback from '../components/lib/Common/Feedback';
import InputWrapper from '../components/lib/Common/InputWrapper';
import {
    setActive,
    setBlured,
    setError,
    setInput,
} from '../redux/slices/passengersSlice';
import { InputState } from '../redux/slices/utils/reduxInputUtils';
import useChange from './useChange';
import useSelect from './useSelect';
import useValidateInput from './useValidateInput';

type Props = { name: string; id: string; state: InputState };
export default function InputStateValidated(props: Props) {
    const ref = useRef<HTMLInputElement>(null);
    const { state, name, id } = props;
    const {
        value, formError, error, wasFocused,
    } = state;

    const onChange = useChange(setInput, id);
    const { onFocus, onBlur } = useSelect(setActive, setBlured, id);
    const validate = useValidateInput(setError, id);

    useEffect(() => {
        if (!ref.current) return;
        const input = ref.current;

        validate(input);
    }, [value]);

    return (
        <InputWrapper cls='passenger-input-wrapper'>
            <input
                required
                value={value}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                id={name}
                className='input'
                name={name}
            />
            <Feedback
                error={error} formError={formError}
                wasFocused={wasFocused}
            />
        </InputWrapper>
    );
}
