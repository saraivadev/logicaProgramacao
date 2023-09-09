var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const distancia = lines[0];
console.log(`${distancia * 2} minutos`);

