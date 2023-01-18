import React from 'react';
// import CountdownTimer from './components/CountdownTimer';
import './CountDown.css';

export default function CountdownTimer() {
  const THREE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <h1 className='TitleContainer'>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}
