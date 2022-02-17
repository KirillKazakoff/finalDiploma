import React, { useRef } from 'react';
import { ValidateInputT } from '../../../../types/typesForms';
import { SearchWayInputProps } from '../../../../types/typesSearch';
import Input from '../../Common/Input';
import InputWrapper from '../../Common/InputWrapper';
import SearchWayFeedback from './SearchWayFeedback';
import SearchWayTips from './SearchWayTips';
import validateCity from './validateCity';

export default function SearchWayInput(props: SearchWayInputProps) {
    const {
        onFocus, onBlur, onChange, wayState, children, placeholder, name, validate,
    } = props;

    const inputEl = useRef<HTMLInputElement>(null);

    const validateWay: ValidateInputT = (input) => {
        const cityCheck = wayState.cities[0]?.name;
        validateCity(input, cityCheck);
        validate(input);
    };

    const { error, isFormError } = wayState;
    const validityCls = error || isFormError ? 'invalid' : 'valid';

    return (
        <InputWrapper cls={`search-input-wrapper input-${validityCls}`}>
            <SearchWayTips
                cities={wayState.cities}
                isActive={wayState.isActive}
                inputRef={inputEl}
            />
            <Input
                validate={validateWay}
                className='search-input'
                parentRef={inputEl}
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
