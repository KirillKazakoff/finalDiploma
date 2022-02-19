import React, { useRef, useEffect } from 'react';
import { SearchWayInputProps } from '../../../../types/typesSearch';
import InputWrapper from '../../Common/InputWrapper';
import SearchWayFeedback from './SearchWayFeedback';
import SearchWayTips from './SearchWayTips';
import validateCity from './validateCity';

export default function SearchWayInput(props: SearchWayInputProps) {
    const {
        onFocus, onBlur, onChange, wayState, children, placeholder, name, validate,
    } = props;

    const inputEl = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!inputEl.current) return;

        const input = inputEl.current;
        const cityCheck = wayState.cities[0]?.name;
        validateCity(input, cityCheck);
        validate(input);
    }, [wayState.cities, wayState.value]);

    const { error, isFormError } = wayState;
    const validityCls = error || isFormError ? 'invalid' : 'valid';

    return (
        <InputWrapper cls={`search-input-wrapper input-${validityCls}`}>
            <SearchWayTips
                cities={wayState.cities}
                isActive={wayState.isActive}
                inputRef={inputEl}
            />
            <input
                ref={inputEl}
                autoComplete='off'
                pattern='[а-я]*[-]?[а-я]*[а-я]$'
                className='input search-input'
                placeholder={placeholder}
                name={name}
                value={wayState.value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                required
            />
            <SearchWayFeedback wayState={wayState} input={inputEl.current} />
            {wayState.isActive ? null : children}
        </InputWrapper>
    );
}
