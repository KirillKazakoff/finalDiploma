/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

type Props = {
    children: React.ReactNode[];
    selected: string;
    cls: string;
};

export default function FormSelect(props: Props) {
    const { selected, cls, children } = props;
    const [isActive, setActive] = useState(false);

    const optionsList = isActive ? (
        <ul className={`options options-${cls}`}>{children}</ul>
    ) : null;

    const disabledCls = children.length > 0 ? '' : 'filter-secondary';
    const onListClick = () => setActive(!isActive);

    return (
        <div
            className={`input-wrapper select-wrapper select select-${cls} ${disabledCls}`}
            onClick={onListClick}
        >
            <div className={`selected-option selected-option-${cls}`}>{selected}</div>
            <img src='./svg/actions/select-arrow.svg' alt='select-arrow' />
            {optionsList}
        </div>
    );
}
