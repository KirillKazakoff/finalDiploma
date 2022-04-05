import React, { useEffect, useRef } from 'react';
import useChange from '../../../../../form/useChange';
import { useAppSelector } from '../../../../../redux/reduxHooks';
import {
    setActive,
    setBlured,
    setError,
    setInput,
} from '../../../../../redux/slices/passengersSlice';
import InputWrapper from '../../../Common/InputWrapper';
import useSelect from '../../../../../form/useSelect';
import useValidateInput from '../../../../../form/useValidateInput';
import Feedback from '../../../Common/Feedback';

type Props = { label: string; name: string; id: string };
export default function FullNameInput(props: Props) {
    const ref = useRef<HTMLInputElement>(null);
    const { label, name, id } = props;
    const {
        value, formError, error, wasFocused,
    } = useAppSelector(
        (state) => state.passengers[id][name],
    );

    const onChange = useChange(setInput, id);
    const { onFocus, onBlur } = useSelect(setActive, setBlured, id);
    const validate = useValidateInput(setError, id);

    useEffect(() => {
        if (!ref.current) return;
        const input = ref.current;

        validate(input);
    }, [value]);

    return (
        <div className='passenger-form-col'>
            <label className='passenger-input-label' htmlFor={name}>
                {label}
            </label>
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
        </div>
    );
}
