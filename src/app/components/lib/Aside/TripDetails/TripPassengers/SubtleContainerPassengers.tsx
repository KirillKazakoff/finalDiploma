import React, { useState } from 'react';
import SvgPassenger from '../../../Svg/SvgPassenger';
import SubtlePic from '../../SubtleContainer/SubtlePic';
import SubtleSign from '../../SubtleContainer/SubtleSign';
import SubtleDesc from '../../SubtleContainer/SubtleDesc';

type TripCollapseProps = {
    children: React.ReactNode;
    desc: string;
};

export default function SubtleContainerPassengers(props: TripCollapseProps) {
    const { children, desc } = props;
    const [isActive, setActive] = useState(false);

    return (
        <div className='trip-section trip-section-subtle'>
            <div className='subtle-container'>
                <SubtlePic>
                    <SvgPassenger />
                </SubtlePic>

                <SubtleDesc>{desc}</SubtleDesc>
                <SubtleSign isActive={isActive} setActive={setActive} />
            </div>
            {isActive ? children : null}
        </div>
    );
}
