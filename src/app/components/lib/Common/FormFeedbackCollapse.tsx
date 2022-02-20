import React from 'react';
import SvgCrossMark from '../Svg/Actions/SvgCrossMark';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setFormMsgHidden } from '../../../redux/slices/searchFormSlice';
import SvgTick from '../Svg/Actions/SvgTick';

type Props = { status: string };

export default function FormFeedbackCollapse({ status }: Props) {
    const dispatch = useAppDispatch();
    const onClick = () => {
        dispatch(setFormMsgHidden(true));
    };

    const getIcon = () => {
        if (status === 'error') {
            return <SvgCrossMark filter='filter-error' height={16} />;
        }
        return <SvgTick filter='filter-success' height={18} />;
    };

    return (
        <button
            className={`form-feedback-collapse form-feedback-collapse-${status}`}
            onClick={onClick}
            type='button'
        >
            {getIcon()}
        </button>
    );
}
