import React from 'react';
import SvgLocation from '../../Svg/SvgLocation';
import SearchWayInput from './SearchWayInput';
import { SearchWayProps } from '../../../../types';
import { useAppSelector } from '../../../../redux/reduxHooks';

export default function SearchWayTo(props: SearchWayProps) {
    const {
        onChange, onBlur, onFocus, validate,
    } = props;
    const wayTo = useAppSelector((state) => state.searchWay.wayTo);

    return (
        <SearchWayInput
            validate={validate}
            placeholder='Куда'
            name='wayTo'
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            wayState={wayTo}
        >
            <SvgLocation height={32} />
        </SearchWayInput>
    );
}
