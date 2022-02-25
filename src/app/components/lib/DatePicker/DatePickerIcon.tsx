import React from 'react';
import SvgCalendar from '../Svg/SvgCalendar';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { togglePickerActive } from '../../../redux/slices/searchDateSlice';

type Props = { name: string; onClickCheck?: () => void | null; height: number };

export default function DatePickerIcon({ name, onClickCheck, height }: Props) {
    const dispatch = useAppDispatch();

    const onClick = () => {
        if (onClickCheck) onClickCheck();
        dispatch(togglePickerActive(name));
    };

    return (
        <button type='button' onClick={onClick}>
            <SvgCalendar height={height} />
        </button>
    );
}

DatePickerIcon.defaultProps = {
    onClickCheck: null,
};
