var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var idadeEmDias = parseInt(lines);
var numAnos= Math.floor(idadeEmDias/365);
var numMeses= Math.floor((idadeEmDias%365)/30);
var dias= Math.floor((idadeEmDias%365)%30);

console.log(`${numAnos} ano(s)\n`+`${numMeses} mes(es)\n`+`${dias} dia(s)`);