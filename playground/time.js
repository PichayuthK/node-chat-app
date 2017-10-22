// Jan 1st 1970 00:00:00 am   => at this date the node timestamp is 0 is it is minus(-), means go back in time from that date
// if it is positive, mean move forward

var moment = require('moment');

// var date = moment();
// date.add(1,'years').subtract(9,'months');
// console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

//create time stamp
var createdAt = 1234;

var date = moment(createdAt);
console.log(date.format('h:mm a'));