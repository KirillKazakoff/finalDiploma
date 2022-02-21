import React from 'react';
import SvgCalendar from '../Svg/SvgCalendar';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { togglePickerActive } from '../../../redux/slices/searchDateSlice';

type Props = { name: string; disabled: boolean };

export default function DatePickerIcon({ name, disabled }: Props) {
    const dispatch = useAppDispatch();
    const onClick = () => {
        if (disabled) return;
        dispatch(togglePickerActive(name));
    };

    return (
        <button type='button' onClick={onClick}>
            <SvgCalendar height={32} />
        </button>
    );
}
