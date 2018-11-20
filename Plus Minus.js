'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    var pCount = 0; 
    var nCount = 0;
    var zCount = 0; 
    for (var x = 0; x < arr.length; x++){
        if (arr[x] > 0)
            pCount++;
        else if (arr[x] < 0)
            nCount++;
        else
            zCount++; 
      
    }
 
    console.log(pCount / arr.length);
    console.log(nCount / arr.length);
    console.log(zCount / arr.length);

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
