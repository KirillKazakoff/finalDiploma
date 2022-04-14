import React, { HTMLProps } from 'react';
import { getValidityCls } from '../../../../form/getValidityCls';
import useChange from '../../../../form/useChange';
import useSelect from '../../../../form/useSelect';
import {
    setActive,
    setBlured,
    setInput,
} from '../../../../redux/slices/paymentFieldsSlice';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { InputState } from '../../../../redux/slices/utils/reduxInputUtils';
import { RefT } from '../../../../types/typesReact';
import Feedback from '../../Common/Feedback/Feedback';
import InputWrapper from '../../Common/InputWrapper';
import { selectMsgStatus } from '../../../../redux/slices/paymentFormSlice';

/* eslint-disable react/default-props-match-prop-types */
type Props = {
    name: string;
    state: InputState;
    parrentRef: RefT<HTMLInputElement>;
    wrapperCls?: string;
} & HTMLProps<HTMLInputElement>;

export default function PaymentInput(props: Props) {
    const {
        state,
        name,
        required,
        pattern,
        parrentRef,
        className,
        placeholder,
        wrapperCls,
        type,
    } = props;

    const {
        value, formError, error, wasFocused,
    } = state;

    const onChange = useChange(setInput);
    const { onFocus, onBlur } = useSelect(setActive, setBlured);
    const validityCls = getValidityCls(state);
    const isFormMsgHidden = useAppSelector(selectMsgStatus);

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
                type={type}
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

PaymentInput.defaultProps = {
    id: '',
    className: '',
    wrapperCls: '',
};
