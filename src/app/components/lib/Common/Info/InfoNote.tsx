import React from 'react';
import SvgInfo from '../../Svg/Actions/SvgInfo';
import Info from './Info';
import { InfoMsgT } from './messagesInfo';

type Props = { msg: InfoMsgT };

export default function InfoNote({ msg }: Props) {
    return (
        <Info
            cls='note' icon={<SvgInfo />}
            msg={msg}
        />
    );
}
