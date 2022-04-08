import React from 'react';

import SvgExclamation from '../../Svg/Actions/SvgExclamation';
import Info from './Info';
import { InfoMsgT } from './messagesInfo';

type Props = { msg: InfoMsgT };

export default function InfoError({ msg }: Props) {
    return (
        <Info
            cls='error' icon={<SvgExclamation />}
            msg={msg}
        />
    );
}
