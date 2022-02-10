import React from 'react';

export default function DatePicker() {
    return (
        <div className='date-picker-container'>
            <div className='date-picker-arrow' />
            <div className='date-picker'>
                <header className='date-picker-header'>Август</header>
                <div className='date-picker-header-bottom' />
                <div className='date-picker-content'>
                    <ul className='date-picker-content-row'>
                        <li className='date-picker-day date-picker-day-non-month'>30</li>
                        <li className='date-picker-day date-picker-day-non-month'>31</li>
                        <li className='date-picker-day date-picker-day-past'>1</li>
                        <li className='date-picker-day date-picker-day-past'>2</li>
                        <li className='date-picker-day date-picker-day-past'>3</li>
                        <li className='date-picker-day date-picker-day-past'>4</li>
                        <li className='date-picker-day date-picker-day-past date-picker-day-sunday'>
                            5
                        </li>
                    </ul>
                    <ul className='date-picker-content-row'>
                        <li className='date-picker-day date-picker-day-past'>6</li>
                        <li className='date-picker-day date-picker-day-past'>7</li>
                        <li className='date-picker-day date-picker-day-current'>8</li>
                        <li className='date-picker-day'>9</li>
                        <li className='date-picker-day'>10</li>
                        <li className='date-picker-day'>11</li>
                        <li className='date-picker-day date-picker-day-sunday'>12</li>
                    </ul>
                    <ul className='date-picker-content-row'>
                        <li className='date-picker-day'>13</li>
                        <li className='date-picker-day'>14</li>
                        <li className='date-picker-day'>15</li>
                        <li className='date-picker-day'>16</li>
                        <li className='date-picker-day'>17</li>
                        <li className='date-picker-day'>18</li>
                        <li className='date-picker-day date-picker-day-sunday'>12</li>
                    </ul>
                    <ul className='date-picker-content-row'>
                        <li className='date-picker-day'>19</li>
                        <li className='date-picker-day'>20</li>
                        <li className='date-picker-day'>21</li>
                        <li className='date-picker-day'>22</li>
                        <li className='date-picker-day'>23</li>
                        <li className='date-picker-day'>24</li>
                        <li className='date-picker-day date-picker-day-sunday'>25</li>
                    </ul>
                    <ul className='date-picker-content-row'>
                        <li className='date-picker-day'>26</li>
                        <li className='date-picker-day'>27</li>
                        <li className='date-picker-day'>28</li>
                        <li className='date-picker-day'>29</li>
                        <li className='date-picker-day'>30</li>
                        <li className='date-picker-day date-picker-day-non-month'>1</li>
                        <li className='date-picker-day date-picker-day-non-month date-picker-day-sunday'>
                            2
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
