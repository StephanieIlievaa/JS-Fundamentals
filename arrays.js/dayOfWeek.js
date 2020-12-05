function dayOfWeek(day) {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    if (day < 1 || day > days.length) {
        console.log('Invalid day!');

    } else {
        console.log(days[day - 1]);
    }


}

dayOfWeek(8);