/* eslint-disable react/default-props-match-prop-types */
import React, { HTMLProps } from 'react';
import Feedback from '../../Common/Feedback/Feedback';
import InputWrapper from '../../Common/Form/InputWrapper';
import {
    selectMsgHidden,
    setActive,
    setBlured,
    setInput,
} from '../../../../redux/slices/passengersSlice';
import { InputState } from '../../../../redux/slices/utils/reduxInputUtils';
import { RefT } from '../../../../types/typesReact';
import { getValidityCls } from '../../Common/Form/getValidityCls';
import { useAppSelector } from '../../../../redux/reduxHooks';
import useChange from '../../Common/Form/useChange';
import useSelect from '../../Common/Form/useSelect';

type Props = {
    name: string;
    id?: string;
    state: InputState;
    parrentRef: RefT<HTMLInputElement>;
    wrapperCls?: string;
} & HTMLProps<HTMLInputElement>;

export default function PassengerInput(props: Props) {
    const {
        state,
        name,
        id,
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

    const onChange = useChange(setInput, id);
    const { onFocus, onBlur } = useSelect(setActive, setBlured, id);
    const validityCls = getValidityCls(state);
    const isFormMsgHidden = useAppSelector(selectMsgHidden(id));

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
