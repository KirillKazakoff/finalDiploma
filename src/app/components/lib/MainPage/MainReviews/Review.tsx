import React from 'react';

type Props = { src: string; title: string; children: string };

export default function Review(props: Props) {
    const { src, title, children } = props;

    return (
        <li className='review'>
            <img
                className='img review-img' alt='person-ava'
                src={src}
            />
            <div className='review-content'>
                <h3 className='review-title'>{title}</h3>
                <p className='review-desc'>{children}</p>
            </div>
        </li>
    );
}
