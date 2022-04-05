import React from 'react';
import FormFeedback from '../Common/FormFeedback';

type Props = { children: React.ReactNode; id: string };
export default function PassengerFormFeedback(props: Props) {
    const { children, id } = props;

    return <FormFeedback>{children}</FormFeedback>;
}
