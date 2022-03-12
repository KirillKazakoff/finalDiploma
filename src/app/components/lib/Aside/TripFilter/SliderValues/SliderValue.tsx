/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { RefDivT } from '../../../../../types/typesReact';
import { OnMouseDownT } from './useMove';

type SliderValueProps = {
    circleRef: RefDivT;
    type: string;
    onMouseDown: OnMouseDownT;
    value: number;
};

export default function SliderValue(props: SliderValueProps) {
    const {
        circleRef, type, onMouseDown, value,
    } = props;

    const onDragStart = (e: React.DragEvent) => e.preventDefault();

    return (
        <div
            className={`slider-value-container slider-value-container-${type}`}
            onMouseDown={onMouseDown}
            onDragStart={onDragStart}
            id={type}
            ref={circleRef}
        >
            <div className='slider-value-circle' />
            <span className='slider-value-desc'>{value}</span>
        </div>
    );
}

// /* eslint-disable jsx-a11y/no-static-element-interactions */
// import React, { useState } from 'react';
// import { RefDivT } from '../../../../../types/typesReact';
// import { OnMouseDownT } from './useMove';

// type SliderValueProps = {
//     circleRef: RefDivT;
//     type: string;
//     initValue: number;
//     onMouseDown: OnMouseDownT;
// };

// export default function SliderValue(props: SliderValueProps) {
//     const {
//         circleRef, type, initValue, onMouseDown,
//     } = props;

//     const onDragStart = (e: React.DragEvent) => e.preventDefault();
//     const [value, setValue] = useState(initValue);

//     return (
//         <div
//             className={`slider-value-container slider-value-container-${type}`}
//             onMouseDown={onMouseDown}
//             onDragStart={onDragStart}
//             id={type}
//             ref={circleRef}
//         >
//             <div className='slider-value-circle' />
//             <span className='slider-value-desc'>{value}</span>
//         </div>
//     );
// }
