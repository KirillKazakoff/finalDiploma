import React from 'react';
import SvgLocation from '../../Svg/SvgLocation';
import SearchWayInput, { SearchWayInputProps } from './SearchWayInput';
import { OnBlurT, OnChangeNewT } from '../../../../types';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';

type Props = {
    onChange: any;
    onBlur: OnBlurT;
    onFocus: OnBlurT;
};

export default function SearchWayFrom(props: Props) {
    const { onChange, onBlur, onFocus } = props;
    const wayFrom = useAppSelector((state) => state.searchWay.wayFrom);

    return (
        <SearchWayInput
            placeholder='Откуда'
            name='wayFrom'
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            wayState={wayFrom}
        >
            <SvgLocation height={32} />
        </SearchWayInput>
    );
}
