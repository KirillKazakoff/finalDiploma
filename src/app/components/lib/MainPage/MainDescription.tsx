import React from 'react';
import SvgOfice from '../Svg/Skills/SvgOfice';
import SvgOrder from '../Svg/Skills/SvgOrder';
import SvgNet from '../Svg/Skills/SvgNet';

export default function MainDescription() {
    return (
        <section className='description framed'>
            <header className='description-header'>
                <h2 className='section-title ddescription-title'>Как это работает</h2>
                <button className='btn know-more-btn' type='button'>
                    Узнать больше
                </button>
            </header>
            <ul className='skills'>
                <li className='skill'>
                    <SvgOrder />
                    <div className='skill-desc'>Удобный заказ на сайте</div>
                </li>
                <li className='skill'>
                    <SvgOfice />
                    <div className='skill-desc'>Нет необходимости ехать в офис</div>
                </li>
                <li className='skill'>
                    <SvgNet />
                    <div className='skill-desc'>Огромный выбор направлений</div>
                </li>
            </ul>
        </section>
    );
}
