import React from 'react';
import SvgCalendar from '../Svg/SvgCalendar';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { togglePickerActive } from '../../../redux/slices/searchDateSlice';

type Props = { name: string; onClickDate: () => void };

export default function DatePickerIcon({ name, onClickDate }: Props) {
    const dispatch = useAppDispatch();

    const onClick = () => {
        onClickDate();
        dispatch(togglePickerActive(name));
    };

    return (
        <button type='button' onClick={onClick}>
            <SvgCalendar height={32} />
        </button>
    );
}
