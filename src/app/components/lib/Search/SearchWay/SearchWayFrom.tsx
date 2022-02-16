import React from 'react';
import SvgLocation from '../../Svg/SvgLocation';
import SearchWayInput from './SearchWayInput';
import { SearchWayProps } from '../../../../types';
import { useAppSelector } from '../../../../redux/reduxHooks';

export default function SearchWayFrom(props: SearchWayProps) {
    const {
        onChange, onBlur, onFocus, validate,
    } = props;
    const wayFrom = useAppSelector((state) => state.searchWay.wayFrom);

    return (
        <SearchWayInput
            placeholder='Откуда'
            name='wayFrom'
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            wayState={wayFrom}
            validate={validate}
        >
            <SvgLocation height={32} />
        </SearchWayInput>
    );
}
