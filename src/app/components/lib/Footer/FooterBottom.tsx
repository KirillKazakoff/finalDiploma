import React from 'react';

export default function FooterBottom() {
    return (
        <section className='footer-bottom framed'>
            <div className='logo'>Лого</div>
            <button className='footer-collapse material-icons' type='button'>
                <img
                    src='./svg/footer-arrow.svg' width='15px'
                    alt='arrow'
                />
            </button>
            <p className='copyright'>2022 WEB</p>
        </section>
    );
}
