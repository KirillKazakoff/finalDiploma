import React, { useEffect, useRef } from 'react';
import PageLoader from './PageLoader';

export default function PageLoaderScrolled() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, []);

    return (
        <div ref={ref}>
            <PageLoader cls='page-loader-main' desc='Идет поиск...' />
        </div>
    );
}
