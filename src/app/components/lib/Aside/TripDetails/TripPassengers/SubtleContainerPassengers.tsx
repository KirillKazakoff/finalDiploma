import React, { useState } from 'react';
import SvgPassenger from '../../../Svg/SvgPassenger';
import SubtlePic from '../../SubtleContainer/SubtlePic';
import SubtleDesc from '../../SubtleContainer/SubtleDesc';

type TripCollapseProps = {
    desc: string;
};

export default function SubtleContainerPassengers(props: TripCollapseProps) {
    const { desc } = props;

    return (
        <div className='subtle-container'>
            <SubtlePic>
                <SvgPassenger />
            </SubtlePic>

            <SubtleDesc>{desc}</SubtleDesc>
        </div>
    );
}
