import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';
import { selectRate, setRate } from '../../../../redux/slices/rateSlice';
import { numberToArray } from '../utils/numberToArray';

export default function SuccessRate() {
    const rate = useAppSelector(selectRate);
    const dispatch = useAppDispatch();
    const onClick = (index: number) => () => {
        dispatch(setRate(index));
    };

    const starsList = numberToArray(5).map((index) => {
        let cls = 'success-rate-star';
        cls = index === rate ? `${cls} ${cls}-active` : cls;
        const color = index >= rate ? 'red' : 'currentColor';

        return (
            <li
                className={cls} key={index}
                onClick={onClick(index)}
            >
                <svg
                    viewBox='100 100 100 100'
                    width='50'
                    height='50'
                    className='star-svg'
                >
                    <path
                        d='
                            M 160.000 180.000
                            L 183.511 192.361
                            L 179.021 166.180
                            L 198.042 147.639
                            L 171.756 143.820
                            L 160.000 120.000
                            L 148.244 143.820
                            L 121.958 147.639
                            L 140.979 166.180
                            L 136.489 192.361
                            L 160.000 180.000
                        '
                        stroke='white'
                        strokeWidth='4'
                        fill='currentColor'
                        color={color}
                    />
                </svg>
            </li>
        );
    });

    return <ul className='success-rate-stars'>{starsList}</ul>;
}
