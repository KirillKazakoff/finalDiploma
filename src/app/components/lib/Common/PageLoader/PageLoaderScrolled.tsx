import React, { useRef } from 'react';
import PageLoader from './PageLoader';

export default function PageLoaderScrolled() {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div ref={ref}>
            <PageLoader cls='page-loader-main' desc='Идет поиск...' />
        </div>
    );
}
