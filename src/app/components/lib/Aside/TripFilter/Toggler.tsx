import React from 'react';
import { setToggler } from '../../../../redux/slices/searchFilterSlice';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';

type Props = { children: string; imgName: string; dispatchName: string };

export default function Toggler({ children, imgName, dispatchName }: Props) {
    const dispatch = useAppDispatch();
    const isActive = useAppSelector(
        (state) => state.searchFilter.aside.togglers[dispatchName],
    );

    const containerCls = isActive ? 'toggler-on' : '';
    const imgCls = isActive ? 'filter-main' : '';

    const onClick = () => {
        dispatch(setToggler({ name: dispatchName, value: !isActive }));
    };

    return (
        <li className='toggler-item' onClick={onClick}>
            <img
                src={`./svg/features/${imgName}.svg`} alt={imgName}
                className={imgCls}
            />
            <div className='toggler-desc'>{children}</div>
            <button type='button' className={`toggler-container ${containerCls}`}>
                <div className='toggler-circle' />
            </button>
        </li>
    );
}
