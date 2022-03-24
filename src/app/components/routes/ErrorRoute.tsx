import React from 'react';

export default function ErrorRoute() {
    const onClick = () => window.history.back();

    return (
        <div className='error-route'>
            <h2 className='error-title'>404 Error</h2>
            <div className='error-desc'>
                Something went wrong bruh, you should do something
            </div>
            <div className='error-pic'>
                <div className='absolute-loader'>
                    <div className='lds-spinner'>
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>
            <button
                type='button' className='btn btn-back'
                onClick={onClick}
            >
                Вернуться назад
            </button>
        </div>
    );
}
