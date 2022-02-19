import React from 'react';
import SvgLocation from '../../Svg/SvgLocation';
import SearchWayInput from './SearchWayInput';

import { useAppSelector } from '../../../../redux/reduxHooks';
import { SearchWayProps } from '../../../../types/typesSearch';

export default function SearchWayTo(props: SearchWayProps) {
    const {
        onChange, onBlur, onFocus, validate, checkCityMatch,
    } = props;
    const wayTo = useAppSelector((state) => state.searchWay.wayTo);

    return (
        <SearchWayInput
            checkCityMatch={checkCityMatch}
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
