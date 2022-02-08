import React, { HTMLProps, useRef } from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
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

    const cityName = wayState.cities[0]?.name;

    return (
        <InputWrapper cls='search-input-wrapper'>
            <input
                autoComplete='off'
                ref={inputEl}
                placeholder={placeholder}
                name={name}
                value={wayState.value}
                onChange={onChange(inputEl, cityName)}
                onFocus={onFocus}
                onBlur={onBlur}
                required
            />
            <SearchWayTips
                cities={wayState.cities}
                isActive={wayState.isActive}
                inputRef={inputEl}
                onChange={onChange(inputEl, cityName)}
            />
            <SearchWayFeedback wayState={wayState} name={name} />
            {children}
        </InputWrapper>
    );
}
