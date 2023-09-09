var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());

const resultados = {
  'ataque-pedra': 'Jogador 1 venceu',
  'pedra-ataque': 'Jogador 2 venceu',
  'pedra-papel': 'Jogador 1 venceu',
  'papel-pedra': 'Jogador 2 venceu',
  'papel-ataque': 'Jogador 2 venceu',
  'ataque-papel': 'Jogador 1 venceu',
  'papel-papel': 'Ambos venceram',
  'pedra-pedra': 'Sem ganhador',
  'ataque-ataque': 'Aniquilacao mutua',
};

for (let i = 0; i < n; i++) {
  const jogador1 = lines.shift();
  const jogador2 = lines.shift();
  const chave = `${jogador1}-${jogador2}`;

  if (resultados[chave]) {
    console.log(resultados[chave]);
  } 
}