import React, { useState } from 'react';
import SvgSliderArrow from '../../../Svg/SvgSliderArrow';
import TripCollapseSign from './TripCollapseSign';
import TripDirDesc from './TripDirDesc';

type TripCollapseProps = {
    children: React.ReactNode;
    direction: 'to' | 'from';
    desc: string;
};

export default function TripHourSection(props: TripCollapseProps) {
    const [isActive, setActive] = useState(false);
    const { children, direction, desc } = props;

    return (
        <div className='trip-section trip-section-subtle'>
            <div className='subtle-container'>
                <SvgSliderArrow direction={direction} />
                <TripDirDesc>{desc}</TripDirDesc>
                <TripCollapseSign isActive={isActive} setActive={setActive} />
            </div>
            {isActive ? <div className='sliders'>{children}</div> : null}
        </div>
    );
}
