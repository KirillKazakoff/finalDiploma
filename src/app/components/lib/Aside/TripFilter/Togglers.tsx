import React from 'react';
import Toggler from './Toggler';

export default function Togglers() {
    return (
        <ul className='togglers'>
            <Toggler imgName='coupe' name='second_class'>
                Купе
            </Toggler>
            <Toggler imgName='plaz' name='third_class'>
                Плацкарт
            </Toggler>
            <Toggler imgName='person' name='fourth_class'>
                Сидячий
            </Toggler>
            <Toggler imgName='star' name='first_class'>
                Люкс
            </Toggler>
            <Toggler imgName='wireless' name='wifi'>
                Wi-Fi
            </Toggler>
            <Toggler imgName='rocket' name='express'>
                Экспресс
            </Toggler>
        </ul>
    );
}
