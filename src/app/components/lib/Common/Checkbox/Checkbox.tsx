import React from 'react';
import './checkbox.css';

type Props = { isActive: boolean; desc: string; cls?: string; disabled?: boolean };

export default function Checkbox(props: Props) {
    const {
        isActive, desc, cls, disabled,
    } = props;
    const tickImg = <img src='./svg/actions/tick.svg' alt='tick' />;

    let wrapperCls = `checkbox-wrapper ${cls}`;
    wrapperCls = isActive ? `${wrapperCls} filter-main` : wrapperCls;

    return (
        <button
            className={wrapperCls} type='button'
            disabled={disabled}
        >
            <span className='checkbox'>{isActive ? tickImg : null}</span>
            <span className='checkbox-desc'>{desc}</span>
        </button>
    );
}

Checkbox.defaultProps = {
    cls: '',
    disabled: false,
};
