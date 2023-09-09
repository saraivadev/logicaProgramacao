var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());
const resultados = {
  '0': 'PROXYCITY',
  '1': 'P.Y.N.G.',
  '2': 'DNSUEY!',
  '3': 'SERVERS',
  '4': 'HOST!',
  '5': 'CRIPTONIZE',
  '6': 'OFFLINE DAY',
  '7': 'SALT',
  '8': 'ANSWER!',
  '9': 'RAR?',
  '10': 'WIFI ANTENNAS'
};

for (let i = 0; i < n; i++) {
  const [botao1, botao2] = lines.shift().split(' ').map(parseFloat);
  
  const soma = botao1 + botao2;
  const chave = `${soma}`;

  if (resultados[chave]) {
    console.log(resultados[chave]);
  }
}