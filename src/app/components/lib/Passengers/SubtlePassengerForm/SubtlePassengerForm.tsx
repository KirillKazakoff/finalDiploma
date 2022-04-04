import React, { useState } from 'react';
import PassengerRemoveBtn from './PassengerRemoveBtn';
import SubtlePassengerFormBtn from './SubtlePassengerFormBtn';

type Props = { children: React.ReactNode; index: number };

export default function SubtlePassengersForm(props: Props) {
    const { children, index } = props;
    const [isActive, setActive] = useState(true);
    const onClick = () => setActive(!isActive);

    return (
        <form className='passenger-form shadowed'>
            <header className='passenger-header framed-passengers'>
                <SubtlePassengerFormBtn onClick={onClick} isActive={isActive} />
                <span className='passenger-desc'>{`Пассажир ${index + 1}`}</span>
                <PassengerRemoveBtn />
            </header>
            {isActive ? children : null}
        </form>
    );
}
