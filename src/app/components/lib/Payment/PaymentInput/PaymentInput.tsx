/* eslint-disable react/default-props-match-prop-types */
import React, { HTMLProps } from 'react';
import { getValidityCls } from '../../Common/Form/getValidityCls';
import { setActive, setBlured } from '../../../../redux/slices/paymentFieldsSlice';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { InputState } from '../../../../redux/slices/utils/reduxInputUtils';
import { RefT } from '../../../../types/typesReact';
import Feedback from '../../Common/Feedback/Feedback';
import InputWrapper from '../../Common/Form/InputWrapper';
import { selectMsgStatus } from '../../../../redux/slices/paymentFormSlice';
import useSelect from '../../Common/Form/useSelect';

type Props = {
    name: string;
    state: InputState;
    parrentRef: RefT<HTMLInputElement>;
    wrapperCls?: string;
} & HTMLProps<HTMLInputElement>;

export default function PaymentInput(props: Props) {
    const {
        state, className, wrapperCls, parrentRef, ...others
    } = props;

    const {
        value, formError, error, wasFocused,
    } = state;

    // const onChange = useChange(setInput);
    const { onFocus, onBlur } = useSelect(setActive, setBlured);
    const validityCls = getValidityCls(state);
    const isFormMsgHidden = useAppSelector(selectMsgStatus);

    return (
        <InputWrapper cls={`${wrapperCls} passenger-input-wrapper input-${validityCls}`}>
            <input
                {...others}
                ref={parrentRef}
                autoComplete='off'
                value={value}
                onBlur={onBlur}
                onFocus={onFocus}
                className={`input ${className}`}
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
