import React from 'react';
import { setToggler } from '../../../../redux/slices/searchFilterSlice';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';

type Props = { children: string; imgName: string; dispatchName: string };

export default function Toggler({ children, imgName, dispatchName }: Props) {
    const dispatch = useAppDispatch();
    const isActive = useAppSelector(
        (state) => state.searchFilter.aside.togglers[dispatchName],
    );

    const cls = isActive ? 'toggler-on' : '';
    const onClick = () => {
        dispatch(setToggler({ name: dispatchName, value: !isActive }));
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
