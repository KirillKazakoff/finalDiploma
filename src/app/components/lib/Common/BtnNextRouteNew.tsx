import React from 'react';

type Props = { cls?: string; disabled?: boolean; children: React.ReactNode };

export default function BtnNextRouteNew({ cls, disabled, children }: Props) {
    const disabledCls = disabled ? 'btn-next-section-disabled' : '';

    return (
        <div className={`next-route-wrapper next-route-wrapper-${cls}`}>
            <button className={`btn btn-next-section ${disabledCls}`} type='submit'>
                {children}
            </button>
        </div>
    );
}

BtnNextRouteNew.defaultProps = {
    cls: 'default',
    disabled: false,
};
