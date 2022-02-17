import React from 'react';
import SvgCalendar from '../Svg/SvgCalendar';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { toggleActive } from '../../../redux/slices/searchDateSlice';

type Props = { name: string };

export default function DatePickerIcon({ name }: Props) {
    const dispatch = useAppDispatch();
    const onClick = () => dispatch(toggleActive(name));

    return (
        <button type='button' onClick={onClick}>
            <SvgCalendar height={32} />
        </button>
    );
}
