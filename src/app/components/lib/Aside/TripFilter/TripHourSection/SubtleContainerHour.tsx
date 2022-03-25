import React, { useState } from 'react';
import SubtleSign from '../../SubtleContainer/SubtleSign';
import SvgSliderArrow from '../../../Svg/SvgSliderArrow';
import SubtleDesc from '../../SubtleContainer/SubtleDesc';
import SubtlePic from '../../SubtleContainer/SubtlePic';

type TripCollapseProps = {
    children: React.ReactNode;
    dir: 'to' | 'from';
    desc: string;
};

export default function SubtleContainerHour({ children, dir, desc }: TripCollapseProps) {
    const [isActive, setActive] = useState(false);

    return (
        <div className='trip-section trip-section-subtle'>
            <div className='subtle-container'>
                <SubtlePic>
                    <SvgSliderArrow direction={dir} />
                </SubtlePic>
                <SubtleDesc>{desc}</SubtleDesc>
                <SubtleSign isActive={isActive} setActive={setActive} />
            </div>
            {isActive ? children : null}
        </div>
    );
}
