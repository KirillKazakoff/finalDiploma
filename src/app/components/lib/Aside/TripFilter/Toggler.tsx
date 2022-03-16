import React from 'react';
import { setToggler } from '../../../../redux/slices/searchFilterSlice';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';

type Props = { children: string; imgName: string; name: string };

export default function Toggler({ children, imgName, name }: Props) {
    const dispatch = useAppDispatch();
    const fullName = `have_${name}`;
    const isActive = useAppSelector(
        (state) => state.searchFilter.aside.togglers[fullName],
    );

    const cls = isActive ? 'toggler-on' : '';
    const onClick = () => {
        dispatch(setToggler({ name: fullName, value: !isActive }));
    };

    return (
        <li className='toggler-item'>
            <img src={`./svg/features/${imgName}.svg`} alt={imgName} />
            <div className='toggler-desc'>{children}</div>
            <button
                type='button'
                className={`toggler-container ${cls}`}
                onClick={onClick}
            >
                <div className='toggler-circle' />
            </button>
        </li>
    );
}
