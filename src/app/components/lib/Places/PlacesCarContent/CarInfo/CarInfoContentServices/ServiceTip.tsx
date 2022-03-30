import React, { useEffect, useRef } from 'react';
import { mapToName } from './mapSrcToName';
import { BtnT, DivT, RefT } from '../../../../../../types/typesReact';

type Props = { value: string; containerRef: RefT<BtnT> };

export default function ServiceTip({ value, containerRef }: Props) {
    const ref = useRef<DivT>(null);
    const name = mapToName(value);

    useEffect(() => {
        const tip = ref.current;
        const container = containerRef.current;

        tip.classList.add('carriage-info-service-tip-active');
        const tipClient = tip.getBoundingClientRect();
        const containerClient = container.getBoundingClientRect();

        tip.style.top = `${containerClient.height + 10}px`;
        const newPos = -(tipClient.width - containerClient.width) / 2;
        tip.style.left = `${newPos}px`;

        tip.classList.remove('carriage-info-service-tip-active');
    }, []);

    return (
        <div className='carriage-info-service-tip' ref={ref}>
            <div className='carriage-info-service-tip-arrow' />
            {name}
        </div>
    );
}
