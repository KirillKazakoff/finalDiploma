/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useSetInput } from '../../../../form/useSetInput';
import { useAppSelector } from '../../../../redux/reduxHooks';
import Checkbox from '../../Common/Checkbox/Checkbox';
import { selectField, setInput } from '../../../../redux/slices/paymentFieldsSlice';

type Props = { name: string; desc: string };

export default function PayCheck2(props: Props) {
    const [isActive, setState] = useState(false);
    const { name, desc } = props;

    const setInputH = useSetInput('payment_method', setInput);
    const payMethod = useAppSelector(selectField('payment_method'));

    const onClick = () => {
        const value = isActive ? '' : name;
        setState(!isActive);
        setInputH(value);
    };

    useEffect(() => {
        const isPayMethod = name === payMethod.value;
        if (payMethod.value && !isPayMethod) {
            setState(false);
        }
    }, [payMethod.value]);

    return (
        <div className='passenger-form-col passenger-form-col-checkbox'>
            <div className='click-wrapper' onClick={onClick}>
                <Checkbox
                    isActive={isActive} desc={desc}
                    cls='payment-checkbox'
                />
            </div>
        </div>
    );
}
