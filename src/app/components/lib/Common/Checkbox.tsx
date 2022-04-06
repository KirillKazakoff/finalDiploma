import React, { useState } from 'react';

type Props = { init: boolean; desc: string; cls?: string };

export default function Checkbox({ init, desc, cls }: Props) {
    const [isActive, setActive] = useState(init);
    const tickImg = <img src='./svg/actions/tick.svg' alt='tick' />;

    let wrapperCls = `checkbox-wrapper ${cls}`;
    wrapperCls = isActive ? `${wrapperCls} filter-main` : wrapperCls;

    const onClick = () => setActive(!isActive);

    return (
        <button
            className={wrapperCls} onClick={onClick}
            type='button'
        >
            <span className='checkbox'>{isActive ? tickImg : null}</span>
            <span className='checkbox-desc'>{desc}</span>
        </button>
    );
}

Checkbox.defaultProps = {
    cls: '',
};
