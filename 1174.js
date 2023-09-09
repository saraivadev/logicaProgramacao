var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = new Array(100);

for (let i = 0; i < A.length; i++) {
A[i] = parseFloat(lines.shift());
if (A[i] <= 10) {
console.log("A[" + i + "] = " + A[i].toFixed(1));
}
}
