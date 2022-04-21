import React from 'react';
import { nanoid } from 'nanoid';
import ReviewSlider from './ReviewSlider';
import Review from './Review';
import { numberToArrayFrom } from '../../Common/utils/numberToArray';
import { reviewsData } from './reviewsData';
import { useMoveSlide } from './useMoveSlide';

export default function MainReviews() {
    const amountIn = 2;
    const lenght = reviewsData.length;
    const slidersAmount = lenght / 2;

    const { prevReviewsRef, nextReviewsRef, activeSlide } = useMoveSlide(slidersAmount);

    const fromIndex = (activeSlide - 1) * amountIn;
    const numbersNow = numberToArrayFrom(amountIn, fromIndex);
    const numbersNext = numberToArrayFrom(amountIn, fromIndex + amountIn);

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
