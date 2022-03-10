import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';
import { setToggler } from '../../../../redux/slices/searchFilterSlice';

type Props = { children: string; imgName: string; name: string };

export default function Toggler({ children, imgName, name }: Props) {
    const dispatch = useAppDispatch();
    const fullName = `have_${name}`;
    const isActive = useAppSelector((state) => state.searchFilter.togglers[fullName]);

    const cls = isActive ? 'toggler-on' : '';
    const onClick = () => {
        dispatch(setToggler({ name: fullName, isActive: !isActive }));
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