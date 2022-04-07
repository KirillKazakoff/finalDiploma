import React, { useState } from 'react';

type Props = { init: boolean; desc: string; cls?: string; disabled: boolean };

export default function Checkbox(props: Props) {
    const {
        init, desc, cls, disabled,
    } = props;
    const [isActive, setActive] = useState(init);
    const tickImg = <img src='./svg/actions/tick.svg' alt='tick' />;

    let wrapperCls = `checkbox-wrapper ${cls}`;
    wrapperCls = isActive ? `${wrapperCls} filter-main` : wrapperCls;

    const onClick = () => setActive(!isActive);

    return (
        <button
            className={wrapperCls}
            onClick={onClick}
            type='button'
            disabled={disabled}
        >
            <span className='checkbox'>{isActive ? tickImg : null}</span>
            <span className='checkbox-desc'>{desc}</span>
        </button>
    );
}

Checkbox.defaultProps = {
    cls: '',
};
