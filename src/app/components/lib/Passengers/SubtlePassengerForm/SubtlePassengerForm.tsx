import React, { useState } from 'react';
import Form from '../../Common/Form';
import PassengerRemoveBtn from './PassengerRemoveBtn';
import SubtlePassengerFormBtn from './SubtlePassengerFormBtn';

type Props = { children: React.ReactNode; index: number };

export default function SubtlePassengersForm(props: Props) {
    const { children, index } = props;
    const [isActive, setActive] = useState(true);
    const onClick = () => setActive(!isActive);

    return (
        <Form cls='passenger-form shadowed' onSubmitForm={() => console.log('hello')}>
            <header className='passenger-header framed-passengers'>
                <SubtlePassengerFormBtn onClick={onClick} isActive={isActive} />
                <span className='passenger-desc'>{`Пассажир ${index + 1}`}</span>
                <PassengerRemoveBtn />
            </header>
            {isActive ? children : null}
        </Form>
    );
}
