import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import {
    setFormMsgHidden,
    setFormStatus,
} from '../../../../redux/slices/passengersSlice';

import { searchMessages } from '../../Search/messages';
import FormFeedback from '../../Common/Form/FormFeedback';
import { reduceErrors } from '../../Common/Form/reduceErrors';

type Props = { children: React.ReactNode; id: string };
export default function PassengerFormFeedback(props: Props) {
    const { children, id } = props;
    const form = useAppSelector((state) => state.passengers[id]);

    const errors = reduceErrors(Object.values(form.fields));

    const { success } = searchMessages;

    return (
        <section className='passenger-form-section'>
            <FormFeedback
                formId={id}
                msg={success}
                errors={errors}
                setFormStatus={setFormStatus}
                setFormMsgHidden={setFormMsgHidden}
                isMsgHidden={form.isMsgHidden}
                cls='passenger-next'
            >
                {children}
            </FormFeedback>
        </section>
    );
}
