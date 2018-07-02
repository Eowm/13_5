var os = require('os');
var colors = require('colors');


function getTime() {
    var uptime = os.uptime();
    var time = (uptime / 60).toFixed(0);
    var restTime = (uptime % 60).toFixed(0);

    if (time > 60) {
        var timeHours = (uptime / 3600).toFixed(0);
        if (timeHours === 1) {
            console.log('Time: '.yellow+ timeHours + 'hour ' + (time - 60 * timeHours) + 'min ' + restTime + 'sec')
        } else {
            console.log('Time: '.yellow+ timeHours + 'hours ' + (time - 60 * timeHours) + 'min ' + restTime + 'sec')
        }

    } else {
        console.log('Time: '.yellow+ time + 'min' + restTime + 'sec');
    }
}

exports.print = getTime;