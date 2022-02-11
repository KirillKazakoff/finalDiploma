/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import DatePickerHeader from './DatePickerHeader';
import timeR from './utils/timeR';

export default function DatePicker() {
    const { getCurrentData } = timeR();
    getCurrentData();
    return (
        <div className='date-picker-container'>
            <div className='date-picker-arrow-decor' />
            <div className='date-picker'>
                <DatePickerHeader />
                <div className='date-picker-header-bottom' />
                <ul className='date-picker-content'>
                    <li className='date-picker-day date-picker-day-non-month'>30</li>
                    <li className='date-picker-day date-picker-day-non-month'>31</li>
                    <li className='date-picker-day date-picker-day-past'>1</li>
                    <li className='date-picker-day date-picker-day-past'>2</li>
                    <li className='date-picker-day date-picker-day-past'>3</li>
                    <li className='date-picker-day date-picker-day-past'>4</li>
                    <li className='date-picker-day date-picker-day-past date-picker-day-sunday'>
                        5
                    </li>
                    <li className='date-picker-day date-picker-day-past'>6</li>
                    <li className='date-picker-day date-picker-day-past'>7</li>
                    <li className='date-picker-day'>8</li>
                    <li className='date-picker-day'>9</li>
                    <li className='date-picker-day'>10</li>
                    <li className='date-picker-day'>11</li>
                    <li className='date-picker-day date-picker-day-sunday'>12</li>
                    <li className='date-picker-day'>13</li>
                    <li className='date-picker-day'>14</li>
                    <li className='date-picker-day'>15</li>
                    <li className='date-picker-day'>16</li>
                    <li className='date-picker-day'>17</li>
                    <li className='date-picker-day'>18</li>
                    <li className='date-picker-day date-picker-day-sunday'>12</li>
                    <li className='date-picker-day'>19</li>
                    <li className='date-picker-day'>20</li>
                    <li className='date-picker-day'>21</li>
                    <li className='date-picker-day'>22</li>
                    <li className='date-picker-day'>23</li>
                    <li className='date-picker-day'>24</li>
                    <li className='date-picker-day date-picker-day-sunday'>25</li>
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
    );
}
