'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    var details = s.split(':');
    var hours = Number(details[0]);
    var minutes = details[1];
    var seconds = details[2].substr(0, 2);
    var AMPM = details[2].substr(2);

    if (hours === 12) {
        hours = 0;
    }
    if (AMPM.toLowerCase() === 'pm') {
        hours += 12;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    console.log([hours, minutes, seconds].join(':'));
    return [hours, minutes, seconds].join(':')

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
