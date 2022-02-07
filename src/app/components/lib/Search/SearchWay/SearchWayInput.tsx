import React, { HTMLProps, useRef } from 'react';
import { setCities, WayStateT } from '../../../../redux/slices/searchWaySlice';
// import { OnChangeT } from '../../../../types';
import InputWrapper from '../../Common/InputWrapper';
import useChangeValidation from '../../useChangeValidation';
import SearchWayTips from './SearchWayTips';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { getCities } from '../../../../thunk/thunkApi';
import useSearchFocus from './useFocus';

type SearchWayInputProps = {
    children: React.ReactNode;
    wayState: WayStateT;
} & HTMLProps<HTMLInputElement>;

export default function SearchWayInput(props: SearchWayInputProps) {
    const dispatch = useAppDispatch();
    const {
        wayState, placeholder, name, children,
    } = props;

    const inputEl = useRef<HTMLInputElement>(null);
    const [onChangeValidate] = useChangeValidation();

    const onChange = () => {
        if (!inputEl.current) return;
        const { value, name: inputName } = inputEl.current;

        onChangeValidate(inputEl.current);
        if (!value) {
            dispatch(setCities({ cities: [], inputName }));
        } else {
            dispatch(getCities(inputName, value));
        }
    };

    const [onBlur, onFocus] = useSearchFocus();

    return (
        <InputWrapper cls='search-input-wrapper'>
            <input
                autoComplete='off'
                ref={inputEl}
                placeholder={placeholder}
                name={name}
                value={wayState.value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <SearchWayTips
                cities={wayState.cities}
                isActive={wayState.isActive}
                inputRef={inputEl.current}
                onChange={onChange}
            />
            {children}
        </InputWrapper>
    );
}
