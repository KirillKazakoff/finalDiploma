import React, { HTMLProps } from 'react';
import { getValidityCls } from '../../../form/getValidityCls';
import useChange from '../../../form/useChange';
import useSelect from '../../../form/useSelect';
import {
    selectMsgHidden,
    setActive,
    setBlured,
    setInput,
} from '../../../redux/slices/paymentSlice';
import { useAppSelector } from '../../../redux/reduxHooks';
import { InputState } from '../../../redux/slices/utils/reduxInputUtils';
import { RefT } from '../../../types/typesReact';
import Feedback from '../Common/Feedback/Feedback';
import InputWrapper from '../Common/InputWrapper';

/* eslint-disable react/default-props-match-prop-types */
type Props = {
    name: string;
    state: InputState;
    parrentRef: RefT<HTMLInputElement>;
    wrapperCls?: string;
} & HTMLProps<HTMLInputElement>;

export default function PassengerInput(props: Props) {
    const {
        state,
        name,
        required,
        pattern,
        parrentRef,
        className,
        placeholder,
        wrapperCls,
    } = props;

    const {
        value, formError, error, wasFocused,
    } = state;

    const onChange = useChange(setInput);
    const { onFocus, onBlur } = useSelect(setActive, setBlured);
    const validityCls = getValidityCls(state);
    const isFormMsgHidden = useAppSelector(selectMsgHidden);

    return (
        <InputWrapper cls={`${wrapperCls} passenger-input-wrapper input-${validityCls}`}>
            <input
                placeholder={placeholder}
                autoComplete='off'
                pattern={pattern}
                required={required}
                value={value}
                ref={parrentRef}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                id={name}
                className={`input ${className}`}
                name={name}
            />
            <Feedback
                error={error}
                formError={formError}
                wasFocused={wasFocused}
                isFormMsgHidden={isFormMsgHidden}
            />
        </InputWrapper>
    );
}

PassengerInput.defaultProps = {
    id: '',
    className: '',
    wrapperCls: '',
};