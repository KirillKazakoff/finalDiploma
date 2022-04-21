import { useEffect, useRef, useState } from 'react';

export const useMoveSlide = (slidersAmount: number) => {
    const prevReviewsRef = useRef<HTMLUListElement>(null);
    const nextReviewsRef = useRef<HTMLUListElement>(null);
    const [activeSlide, setActive] = useState(1);
    const animProps = {
        duration: 2000,
        iterations: 1,
        easing: 'ease',
    };

    const moveSlide = () => {
        let nextSlide = activeSlide + 1;
        if (activeSlide === slidersAmount) nextSlide = 1;
        setActive(nextSlide);

        prevReviewsRef.current.classList.remove('reviews-hidden');
        const prevAnim = prevReviewsRef.current.animate(
            [{ transform: 'translateX(0)' }, { transform: 'translateX(-110%)' }],
            { ...animProps },
        );
        nextReviewsRef.current.animate(
            [{ transform: 'translateX(110%)' }, { transform: 'translateX(0%)' }],
            { ...animProps },
        );

        const finishListener = () => {
            prevReviewsRef.current.classList.add('reviews-hidden');
            prevAnim.removeEventListener('finish', finishListener);
        };
        prevAnim.addEventListener('finish', finishListener);
    };

    useEffect(() => {
        const timer = setTimeout(moveSlide, 4000);
        return () => clearTimeout(timer);
    });

    return { prevReviewsRef, nextReviewsRef, activeSlide };
};
