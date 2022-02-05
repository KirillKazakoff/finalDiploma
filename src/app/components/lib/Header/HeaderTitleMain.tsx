import React, { HTMLProps } from 'react';

type HeaderTitleMainProps = { plain: string; bold: string };

export default function HeaderTitleMain({ plain, bold }: HeaderTitleMainProps) {
    return (
        <div className='header-title'>
            {plain}
            {' '}
            <span className='header-title-bold'>{bold}</span>
        </div>
    );
}
