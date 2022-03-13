import React from 'react';

type HourSliderTitleProps = { dir: 'from' | 'to'; desc: string };

export default function HourSliderTitle({ dir, desc }: HourSliderTitleProps) {
    return <div className={`slider-hour-title slider-hour-title-${dir}`}>{desc}</div>;
}
