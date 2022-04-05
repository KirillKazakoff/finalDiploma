import React from 'react';

type Props = { id: string };
export default function PassengerFormCheckboxes({ id }: Props) {
    return (
        <div className='passenger-form-row passenger-disabled'>
            <div className='passenger-form-col passenger-form-col-checkbox'>
                <span className='checkbox disabled-checkbox' />
                <span className='disabled-desc'>ограниченная подвижность</span>
            </div>
            <div className='passenger-form-col passenger-form-col-checkbox'>
                <span className='checkbox disabled-checkbox' />
                <span className='disabled-desc'>добавить ребенка без занятия места</span>
            </div>
        </div>
    );
}
