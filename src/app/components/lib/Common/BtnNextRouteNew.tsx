import React from 'react';

type Props = { cls?: string };

export default function BtnNextRouteNew({ cls }: Props) {
    return (
        <div className={`next-route-wrapper next-route-wrapper-${cls}`}>
            <button className='btn btn-next-section' type='submit'>
                Далее
            </button>
        </div>
    );
}

BtnNextRouteNew.defaultProps = {
    cls: 'default',
};
