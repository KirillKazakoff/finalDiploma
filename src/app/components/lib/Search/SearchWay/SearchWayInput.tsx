import React from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import { OnChangeT } from '../../../../types';

type SearchWayInputProps = { onChange: OnChangeT; wayState: WayStateT };

export default function SearchWayFrom({ onChange, wayState }: SearchWayInputProps) {
    return (
        <input
            placeholder='Откуда'
            name='wayFrom'
            onChange={onChange}
            value={wayState.value}
            required
        />
    );
}
