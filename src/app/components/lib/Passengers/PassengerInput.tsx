import React, { useRef, useEffect, HTMLProps } from 'react';
import Feedback from '../Common/Feedback';
import InputWrapper from '../Common/InputWrapper';
import {
    setActive,
    setBlured,
    setError,
    setInput,
} from '../../../redux/slices/passengersSlice';
import { InputState } from '../../../redux/slices/utils/reduxInputUtils';
import useChange from '../../../form/useChange';
import useSelect from '../../../form/useSelect';
import useValidateInput from '../../../form/useValidateInput';

type Props = {
    name: string;
    id: string;
    state: InputState;
} & HTMLProps<HTMLInputElement>;

export default function PassengerInput(props: Props) {
    const ref = useRef<HTMLInputElement>(null);
    const {
        state, name, id, required,
    } = props;
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
                required={required}
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
