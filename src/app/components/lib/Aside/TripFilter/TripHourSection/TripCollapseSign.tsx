import React from 'react';
import { SetStateT } from '../../../../../types/typesReact';
import SvgCollapseMinus from '../../../Svg/Actions/SvgCollapseMinus';
import SvgCollapsePlus from '../../../Svg/Actions/SvgCollapsePlus';

type TripCollapseProps = { isActive: boolean; setActive: SetStateT<boolean> };
export default function TripCollapseSign({ isActive, setActive }: TripCollapseProps) {
    const sign = isActive ? <SvgCollapseMinus /> : <SvgCollapsePlus />;
    const onClick = () => setActive((prev) => !prev);

    return (
        <button onClick={onClick} type='button'>
            {sign}
        </button>
    );
}
