import React from 'react';

type TripDirDescProps = { children: React.ReactNode };
export default function TripDirDesc({ children }: TripDirDescProps) {
    return <div className='subtle-desc'>{children}</div>;
}
