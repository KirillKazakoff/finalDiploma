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
        onFocus, onBlur, onChange, wayState, children, placeholder, name,
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
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                required
            />
            <SearchWayTips
                cities={wayState.cities}
                isActive={wayState.isActive}
                inputRef={inputEl}
            />
            <SearchWayFeedback wayState={wayState} input={inputEl.current} />
            {wayState.isActive ? null : children}
        </InputWrapper>
    );
}
