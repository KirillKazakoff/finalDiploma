import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import ReviewSlider from './ReviewSlider';
import Review from './Review';
import { numberToArrayFrom } from '../../Common/utils/numberToArray';
import { reviewsData } from './reviewsData';

export default function MainReviews() {
    const prevReviewsRef = useRef<HTMLUListElement>(null);
    const nextReviewsRef = useRef<HTMLUListElement>(null);

    const amountIn = 2;
    const lenght = reviewsData.length;

    const slidersAmount = lenght / 2;

    const [activeSlide, setActive] = useState(1);

    const fromIndex = (activeSlide - 1) * amountIn;
    const numbersNow = numberToArrayFrom(amountIn, fromIndex);
    const numbersNext = numberToArrayFrom(amountIn, fromIndex + amountIn);

    // console.log(numbersNext);
    const getReviews = (numbers: number[]) => numbers.map((index) => {
        let reviewIndex = index;
        if (index + 1 > lenght) {
            reviewIndex = index - lenght;
        }

        const { src, title, desc } = reviewsData[reviewIndex];

        return (
            <Review
                key={nanoid()} src={src}
                title={title}
            >
                {desc}
            </Review>
        );
    });

    const reviewsPrev = getReviews(numbersNow);
    const reviewsNext = getReviews(numbersNext);

    const moveSlide = () => {
        let nextSlide = activeSlide + 1;
        if (activeSlide === slidersAmount) nextSlide = 1;
        setActive(nextSlide);

        prevReviewsRef.current.classList.remove('reviews-hidden');
        const prevAnim = prevReviewsRef.current.animate(
            [{ transform: 'translateX(0)' }, { transform: 'translateX(-110%)' }],
            {
                duration: 2000,
                iterations: 1,
                easing: 'ease',
            },
        );
        nextReviewsRef.current.animate(
            [{ transform: 'translateX(110%)' }, { transform: 'translateX(0%)' }],
            {
                duration: 2000,
                iterations: 1,
                easing: 'ease',
            },
        );

        const finishListener = () => {
            prevReviewsRef.current.classList.add('reviews-hidden');
            prevAnim.removeEventListener('finish', finishListener);
        };
        prevAnim.addEventListener('finish', finishListener);
    };

    useEffect(() => {
        setTimeout(moveSlide, 4000);
    });

    return (
        <section className='reviews framed'>
            <h2 className='section-title reviews-title'>Отзывы</h2>

            <div className='reviews-content-wrapper'>
                <ul
                    ref={prevReviewsRef}
                    className='reviews-content reviews-content-prev reviews-hidden'
                >
                    {reviewsPrev}
                </ul>
                <ul ref={nextReviewsRef} className='reviews-content reviews-content-next'>
                    {reviewsNext}
                </ul>
            </div>
            <ReviewSlider length={slidersAmount} active={activeSlide} />
        </section>
    );
}
