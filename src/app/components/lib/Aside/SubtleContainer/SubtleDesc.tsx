import React from 'react';

type TripDirDescProps = { children: React.ReactNode };
export default function SubtleDesc({ children }: TripDirDescProps) {
    return <div className='subtle-desc'>{children}</div>;
}
