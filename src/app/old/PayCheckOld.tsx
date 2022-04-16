/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useSetInput } from '../form/useSetInput';
import { useAppSelector } from '../redux/reduxHooks';
import { PayCheckboxT } from '../types/typesPassengers';
import Checkbox from '../components/lib/Common/Checkbox/Checkbox';
import { selectField, setInput } from '../redux/slices/paymentFieldsSlice';

type Props = { name: string; desc: string } & PayCheckboxT;

export default function PayCheckOld(props: Props) {
    const {
        name, desc, activeWay, setActiveWay,
    } = props;

    const setInputH = useSetInput(name, setInput);
    const payState = useAppSelector(selectField(name));

    const isActive = payState.value === 'true';
    const onClick = () => {
        const value = isActive ? 'false' : 'true';
        setInputH(value);
        setActiveWay(name);
    };

    useEffect(() => {
        if (activeWay !== name) {
            setInputH('false');
        }
    }, [activeWay]);

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
