const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const circle = e.currentTarget;
    const circleClient = circle.getBoundingClientRect();
    const barClient = bar.current.getBoundingClientRect();

    const { left, right } = circleClient;
    const { left: barStartX, right: barEndX, width: barWidth } = barClient;
    const shiftLeft = e.clientX - left;
    const shiftRight = -(e.clientX - right);

    const onMouseMove = ({ pageX }: any) => {
        const from = circleFrom.current.getBoundingClientRect().right;
        const to = circleTo.current.getBoundingClientRect().left;

        const invadeBorders = pageX - shiftLeft < barStartX || pageX + shiftRight > barEndX;
        const leftMoreRight = circle.id !== circleTo.id && pageX - shiftLeft > to;
        const rightMoreLeft = circle.id !== circleFrom.id && pageX + shiftRight < from;
        const isRightSide = pageX > barWidth / 2 + barStartX;

        if (invadeBorders) return;
        if (leftMoreRight) return;
        if (rightMoreLeft) return;

        if (isRightSide) {
            circleFrom.style.zIndex = '1000';
            circleTo.style.zIndex = '0';
        } else {
            circleTo.style.zIndex = '1000';
            circleFrom.style.zIndex = '0';
        }

        const newPosition = pageX - barStartX - shiftLeft;

        circle.style.left = `${newPosition}px`;
        // if (circle.id === 'from') {
        //     setFrom(newPosition);
        // } else {
        //     setTo(newPosition);
        // }
    };

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = () => {
        document.removeEventListener('mousemove', onMouseMove);
        circle.onmouseup = null;
    };
};
