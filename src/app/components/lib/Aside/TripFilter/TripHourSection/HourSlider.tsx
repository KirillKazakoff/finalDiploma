import React from 'react';
import { Duration } from 'luxon';
import SliderLimit from '../SliderValues/SliderLimit';
import SliderValueHour from '../SliderValues/SliderValueHour';
import SliderValues from '../SliderValues/SliderValues';
import SliderValuesContainer from '../SliderValues/SliderValuesContainer';
import useSliderInit from '../SliderValues/useSliderInit';
import { HourSliderProps } from '../../../../../types/typesTripFilter';
import HourSliderTitle from './HourSliderTitle';
import { useAppSelector } from '../../../../../redux/reduxHooks';

export default function HourSlider(props: HourSliderProps) {
    useAppSelector((state) => state.searchFilter);
    const {
        limits, dir, desc, typeFrom, typeTo,
    } = props;
    const { refs, onMouseClosure } = useSliderInit(limits);
    const { min, max } = limits;

    const transform = (value: number) => {
        const duration = Duration.fromMillis(value).shiftTo('hours', 'minutes');
        return duration.toFormat('hh:mm');
    };

    return (
        <SliderValuesContainer>
            <HourSliderTitle dir={dir} desc={desc} />
            <SliderValues
                cls='slider-hour'
                sliderRef={refs.bar}
                progressRef={refs.progressBar}
            >
                <SliderValueHour
                    transform={transform}
                    circleRef={refs.circleFrom}
                    type={`from ${typeFrom}`}
                    onMouseClosure={onMouseClosure}
                    initValue={min}
                />
                <SliderValueHour
                    transform={transform}
                    circleRef={refs.circleTo}
                    type={`to ${typeTo}`}
                    onMouseClosure={onMouseClosure}
                    initValue={max}
                />
            </SliderValues>
            <SliderLimit refs={refs}>{transform(max)}</SliderLimit>
        </SliderValuesContainer>
    );
}
