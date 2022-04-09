import React from 'react';
import { selectDoctype } from '../../../../../redux/slices/passengersSlice';
import PassengerDocnumber from './PassengerDocnumber';
import PassengerDocseries from './PassengerDocseries';
import PassengerDocType from './PassengerDocType';
import { useAppSelector } from '../../../../../redux/reduxHooks';

type Props = { id: string };

export default function PassengerFormDocument({ id }: Props) {
    const doctype = useAppSelector(selectDoctype(id));
    const fields = doctype === 'Паспорт РФ' ? (
        <>
            <PassengerDocseries id={id} />
            <PassengerDocnumber doctype={doctype} id={id} />
        </>
    ) : (
        <PassengerDocnumber doctype={doctype} id={id} />
    );

    return (
        <section className='passenger-form-section framed-passenger-section passenger-document'>
            <div className='passenger-form-row passenger-form-row-document'>
                <PassengerDocType id={id} />
                {fields}
            </div>
        </section>
    );
}
