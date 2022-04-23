import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../redux/reduxHooks';
import { setExtraPrice } from '../../../../../../redux/slices/placesSlice';
import { PayloadExtraPrice } from '../../../../../../types/typesPayload';
import { ServiceProps } from '../../../../../../types/typesPlaces';
import ServiceTip from './ServiceTip';

export default function Service({ service, route, children }: ServiceProps) {
    const containerRef = useRef<HTMLButtonElement>(null);
    const { name, isIncluded, price } = service;
    const dispatch = useAppDispatch();

    const carNumber = useAppSelector(
        (state) => state.places.routes[route].activeCar.carNumber,
    );

    const statePrice = useAppSelector((state) => {
        const { extras } = state.places.routes[route];
        const index = extras.findIndex((extra) => extra.carNumber === carNumber);
        return extras[index].prices[name];
    });

    let containerCls = 'carriage-info-service-item';
    let filterCls = 'filter-black';

    if (statePrice > 0 && !isIncluded) {
        filterCls = 'filter-white';
        containerCls = `${containerCls} ${containerCls}-choosen`;
    }

    const onClick = () => {
        if (isIncluded) return;
        const payload: PayloadExtraPrice = { name, route, value: price };

        if (statePrice > 0) payload.value = 0;
        dispatch(setExtraPrice(payload));
    };

    useEffect(() => {
        if (isIncluded) {
            dispatch(setExtraPrice({ name, route, value: 'isIncluded' }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (price === 0 && !isIncluded) return null;
    return (
        <button
            ref={containerRef}
            className={containerCls}
            onClick={onClick}
            disabled={isIncluded}
            type='button'
        >
            <div className={filterCls}>{children}</div>
            <ServiceTip
                value={name}
                containerRef={containerRef}
                isIncluded={isIncluded}
            />
        </button>
    );
}
