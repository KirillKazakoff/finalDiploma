import React from 'react';
import SvgCrossMark from '../../Svg/Actions/SvgCrossMark';
import SvgTick from '../../Svg/Actions/SvgTick';

type Props = { status: string; onClick: () => void };

export default function FormFeedbackCollapse({ status, onClick }: Props) {
    const iconCls = `form-feedback-collapse-icon form-feedback-collapse-icon-${status}`;
    const getIcon = () => {
        if (status === 'error') {
            return <SvgCrossMark className={`filter-error ${iconCls}`} height={16} />;
        }
        return <SvgTick className={`filter-success ${iconCls}`} height={18} />;
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
