'use strict';

const countdown = () => {

        const countDate = new Date('April 29, 2023 09:00:00').getTime();
        const now = new Date().getTime();
        const gap = countDate - now;
        console.log(countDate);

        // Declaring how time works //
        const second = 1000; // 1 second is 1000 milliseconds //
        const minute = second * 60; // 1 minute is 60 seconds //
        const hour = minute * 60; // 1 hour is 60 minutes //
        const day = hour * 24; // 1 day is 24 hours //

        // Calculate

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.getElementById('days').innerHTML = textDay;
        document.getElementById('hours').innerHTML = textHour;
        document.getElementById('minutes').innerHTML = textMinute;
        document.getElementById('seconds').innerHTML = textSecond;
};

setInterval(countdown, 1000);
