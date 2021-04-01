function solve(input) {
    let meetings = {};
    for(let line of input) {
        let [weekday, name] = line.split(' ');
        if (meetings.hasOWnProperty(weekday)) {
            console.log(`Conflict on ${weekday}`);
        } else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    

}
solve(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);