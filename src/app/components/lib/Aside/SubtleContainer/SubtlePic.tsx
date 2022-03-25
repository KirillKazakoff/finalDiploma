import React from 'react';

type Props = { children: React.ReactNode };

export default function SubtlePic({ children }: Props) {
    return <div className='subtle-pic'>{children}</div>;
}
