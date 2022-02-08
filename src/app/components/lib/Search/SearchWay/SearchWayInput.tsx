import React, { HTMLProps, useEffect, useRef } from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import { OnChangeNewT } from '../../../../types';
import InputWrapper from '../../Common/InputWrapper';
import SearchWayFeedback from './SearchWayFeedback';
import SearchWayTips from './SearchWayTips';

export type SearchWayInputProps = {
    children: React.ReactNode;
    wayState: WayStateT;
    onChange: any;
    name: string;
} & HTMLProps<HTMLInputElement>;

export default function SearchWayInput(props: SearchWayInputProps) {
    const {
        wayState, placeholder, name, children, onFocus, onBlur, onChange,
    } = props;

    const inputEl = useRef<HTMLInputElement>(null);

    // if (wayState.cities[0]?.name !== wayState.value) {
    //     inputEl.current?.setCustomValidity('такого города нет');
    // } else {
    //     inputEl.current?.setCustomValidity('');
    // }

    const cityName = wayState.cities[0]?.name;

    return (
        <InputWrapper cls='search-input-wrapper'>
            <input
                autoComplete='off'
                ref={inputEl}
                placeholder={placeholder}
                name={name}
                value={wayState.value}
                onChange={onChange(inputEl, cityName, wayState.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                required
            />
            <SearchWayTips
                cities={wayState.cities}
                isActive={wayState.isActive}
                inputRef={inputEl}
                onChange={onChange(inputEl)}
            />
            <SearchWayFeedback error={wayState.error} name={name} />
            {children}
        </InputWrapper>
    );
}
