var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
    const [num1, num2] = lines.shift().split(' ').map(parseFloat);
    if (num2 === 0) {
        console.log("divisao impossivel");
    } else {
        console.log((num1 / num2).toFixed(1));
    }
}