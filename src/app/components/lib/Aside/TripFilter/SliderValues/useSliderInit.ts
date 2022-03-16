import { useRef } from 'react';
import { SliderLimitsT } from '../../../../../types/typesTripFilter';
import useMove from './useMove';
import { SetSliderFilterT } from '../../../../../types/typesPayload';

const useSliderInit = (limits: SliderLimitsT, setFilter: SetSliderFilterT) => {
    const bar = useRef<HTMLDivElement>(null);
    const progressBar = useRef<HTMLDivElement>(null);
    const circleFrom = useRef<HTMLDivElement>(null);
    const circleTo = useRef<HTMLDivElement>(null);

    const refs = {
        bar,
        progressBar,
        circleFrom,
        circleTo,
    };
    const onMouseClosure = useMove(refs, limits, setFilter);

    return { refs, onMouseClosure };
};

export default useSliderInit;
