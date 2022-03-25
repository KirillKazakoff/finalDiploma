import React from 'react';
import SvgCalendar from '../Svg/SvgCalendar';
import { SetPickerActiveT } from '../../../types/typesSearch';

type Props = {
    onClickCheck?: () => void | null;
    height: number;
    setActive: SetPickerActiveT;
};

export default function DatePickerIcon({ onClickCheck, height, setActive }: Props) {
    const onClick = () => {
        if (onClickCheck) onClickCheck();
        setActive((prev) => !prev);
    };

    return (
        <button
            type='button' className='date-picker-icon'
            onClick={onClick}
        >
            <SvgCalendar height={height} />
        </button>
    );
}

DatePickerIcon.defaultProps = {
    onClickCheck: null,
};
