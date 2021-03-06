'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    var total = 0;
    var vcount = arr.length;
    var reverseIndex = arr.length-1;

    for (var i = 0; i < vcount; i++){

        for (var y = 0; y < arr[i].length; y++){


            if (i == y) {
                total += arr[i][y]; 
            }

            if (y == reverseIndex) {
                total -= arr[i][y];
            }

          
        }
        reverseIndex--;
    }

    return Math.abs(total);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
