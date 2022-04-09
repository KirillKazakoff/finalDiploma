import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import {
    setFormMsgHidden,
    setFormStatus,
} from '../../../../redux/slices/passengersSlice';
import FormFeedback from '../../Common/FormFeedback';
import { searchMessages } from '../../Search/messages';

type Props = { children: React.ReactNode; id: string };
export default function PassengerFormFeedback(props: Props) {
    const { children, id } = props;
    const form = useAppSelector((state) => state.passengers[id]);

    const errors = Object.values(form.fields).reduce<string[]>((total, state) => {
        total.push(state.error);
        total.push(state.formError);
        return total;
    }, []);

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
