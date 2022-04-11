import React from 'react';
import { DirTProp } from '../../../types/typesPlaces';

export default function PasPlaceDirHeader({ dir }: DirTProp) {
    const dirDesc = dir === 'to' ? 'Туда' : 'Обратно';

    return (
        <header className='pas-places-dir-header'>
            <span className='pas-places-dir-header-desc'>
                Выберите места для пассажиров (
                {dirDesc}
                )
            </span>
        </header>
    );
}
