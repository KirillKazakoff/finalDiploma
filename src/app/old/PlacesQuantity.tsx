import React from 'react';

export default function PlacesQuantity() {
    return (
        <section className='places-section places-section-quantity'>
            <h2 className='places-section-title framed-places'>Количество билетов</h2>
            <div className='places-quantity-info'>
                <div className='places-quantity-info-col'>
                    <div className='places-quantity-info-col-container'>
                        <div className='places-age-info'>Взрослых - 2</div>
                        <div className='places-age-info-desc'>
                            Можно добавить еще 3 пассажиров
                        </div>
                    </div>
                </div>
                <div className='places-quantity-info-col'>
                    <div className='places-quantity-info-col-container'>
                        <div className='places-age-info'>Детских - 1</div>
                        <div className='info-desc info-secondary'>
                            Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как
                            у взрослых, но дешевле в среднем на 50-65%
                        </div>
                    </div>
                </div>
                <div className='places-quantity-info-col'>
                    <div className='places-quantity-info-col-container'>
                        <div className='places-age-info'>Детских "без места"- 0</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
