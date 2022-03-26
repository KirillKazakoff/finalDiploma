import React from 'react';
import SvgRefresh from '../../Svg/Actions/SvgRefresh';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';
import { setCities, setInput } from '../../../../redux/slices/searchWaySlice';

export default function SearchWayUno() {
    const dispatch = useAppDispatch();
    const { wayFrom, wayTo } = useAppSelector((state) => state.searchWay);

    const onClick = () => {
        dispatch(setInput({ name: 'wayTo', value: wayFrom.value }));
        dispatch(setCities({ inputName: 'wayTo', cities: wayFrom.cities }));

        dispatch(setInput({ name: 'wayFrom', value: wayTo.value }));
        dispatch(setCities({ inputName: 'wayFrom', cities: wayTo.cities }));
    };

    return (
        <button type='button' onClick={onClick}>
            <SvgRefresh height={24} />
        </button>
    );
}
