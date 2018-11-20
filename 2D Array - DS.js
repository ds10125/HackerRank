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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {

    var sum = 'X';
    for (var x = 0; x < arr.length-2; x++){
        for (var y = 0; y < arr[x].length-2; y++){
            var tempSum = arr[x][y] + arr[x][y+1] + arr[x][y+2] +
                                      arr[x + 1][y + 1]+ 
                          arr[x+2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2];
            console.log('x:' + x + 'y: ' + y + ' tempSum' + tempSum + ' sum' + sum);
            sum = sum > tempSum && sum !='X'  ? sum : tempSum;

        }
    }
    console.log(arr); 
    
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
