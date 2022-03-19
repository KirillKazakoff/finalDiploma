import React from 'react';
import Toggler from './Toggler';

export default function Togglers() {
    return (
        <ul className='togglers'>
            <Toggler imgName='coupe' dispatchName='have_second_class'>
                Купе
            </Toggler>
            <Toggler imgName='plaz' dispatchName='have_third_class'>
                Плацкарт
            </Toggler>
            <Toggler imgName='person' dispatchName='have_fourth_class'>
                Сидячий
            </Toggler>
            <Toggler imgName='star' dispatchName='have_first_class'>
                Люкс
            </Toggler>
            <Toggler imgName='wireless' dispatchName='have_wifi'>
                Wi-Fi
            </Toggler>
            <Toggler imgName='rocket' dispatchName='is_express'>
                Экспресс
            </Toggler>
        </ul>
    );
}
