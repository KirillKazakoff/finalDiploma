import React from 'react';
import useChange from '../../../../../form/useChange';
import { setInput } from '../../../../../redux/slices/searchDateSlice';
import SearchFormRow from '../../../Search/SearchFormRow';
import TripDateFrom from './TripDateFrom';
import TripDateTo from './TripDateTo';

export default function TripDate() {
    const onChange = useChange(setInput);

    return (
        <div className='trip-date'>
            <SearchFormRow>
                <h2 className='row-title'>Дата поездки</h2>
                <TripDateTo onChange={onChange} />
            </SearchFormRow>

            <SearchFormRow>
                <h2 className='row-title'>Дата возвращения</h2>
                <TripDateFrom onChange={onChange} />
            </SearchFormRow>
        </div>
    );
}
