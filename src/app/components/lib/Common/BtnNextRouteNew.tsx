import React from 'react';

type Props = { cls?: string; disabled?: boolean };

export default function BtnNextRouteNew({ cls, disabled }: Props) {
    const disabledCls = disabled ? 'btn-next-section-disabled' : '';

    return (
        <div className={`next-route-wrapper next-route-wrapper-${cls}`}>
            <button className={`btn btn-next-section ${disabledCls}`} type='submit'>
                Далее
            </button>
        </div>
    );
}

BtnNextRouteNew.defaultProps = {
    cls: 'default',
    disabled: false,
};
