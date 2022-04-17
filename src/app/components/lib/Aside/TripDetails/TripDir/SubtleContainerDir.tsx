import React, { useState } from 'react';
import SubtlePic from '../../SubtleContainer/SubtlePic';
import SubtleSign from '../../SubtleContainer/SubtleSign';
import SubtleDesc from '../../SubtleContainer/SubtleDesc';
import SvgSliderArrow from '../../../Svg/Arrows/SvgSliderArrow';

type TripCollapseProps = {
    children: React.ReactNode;
    dir: 'to' | 'from';
    desc: string;
    date: string;
};

export default function SubtleContainerDir(props: TripCollapseProps) {
    const {
        children, dir, date, desc,
    } = props;
    const [isActive, setActive] = useState(true);

    return (
        <div className='trip-section trip-section-subtle'>
            <div className='subtle-container'>
                <SubtlePic>
                    <SvgSliderArrow direction={dir} />
                </SubtlePic>
                <SubtleDesc>{desc}</SubtleDesc>
                <span className='subtle-time-date'>{date}</span>
                <SubtleSign isActive={isActive} setActive={setActive} />
            </div>
            {isActive ? children : null}
        </div>
    );
}
