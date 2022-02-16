import React, { HTMLProps, useRef } from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import Input from '../../Common/Input';
import InputWrapper from '../../Common/InputWrapper';
import SearchWayFeedback from './SearchWayFeedback';
import SearchWayTips from './SearchWayTips';
import validateCity from './validateCity';
import { ValidateInputT } from '../../../../types';

export type SearchWayInputProps = {
    children: React.ReactNode;
    wayState: WayStateT;
    onChange: any;
    validate: ValidateInputT;
    name: string;
} & HTMLProps<HTMLInputElement>;

export default function SearchWayInput(props: SearchWayInputProps) {
    const {
        onFocus, onBlur, onChange, wayState, children, placeholder, name, validate,
    } = props;

    const inputEl = useRef<HTMLInputElement>(null);

    const validateWay: ValidateInputT = (input) => {
        console.log('validating');
        const cityCheck = wayState.cities[0]?.name;
        validateCity(input, cityCheck);
        validate(input);
    };

    const validityCls = wayState.error ? 'invalid' : 'valid';

    return (
        <InputWrapper cls={`search-input-wrapper input-${validityCls}`}>
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
