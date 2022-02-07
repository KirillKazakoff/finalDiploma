import React, { HTMLProps, useRef } from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import { OnChangeNewT } from '../../../../types';
import InputWrapper from '../../Common/InputWrapper';
import SearchWayTips from './SearchWayTips';

export type SearchWayInputProps = {
    children: React.ReactNode;
    wayState: WayStateT;
    onChange: any;
} & HTMLProps<HTMLInputElement>;

export default function SearchWayInput(props: SearchWayInputProps) {
    const {
        wayState, placeholder, name, children, onFocus, onBlur, onChange,
    } = props;

    const inputEl = useRef<HTMLInputElement>(null);

    return (
        <InputWrapper cls='search-input-wrapper'>
            <input
                autoComplete='off'
                ref={inputEl}
                placeholder={placeholder}
                name={name}
                value={wayState.value}
                onChange={onChange(inputEl)}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <SearchWayTips
                cities={wayState.cities}
                isActive={wayState.isActive}
                inputRef={inputEl}
                onChange={onChange(inputEl)}
            />
            {children}
        </InputWrapper>
    );
}
