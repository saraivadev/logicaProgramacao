var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());

  let anoes = 0, elfos = 0, humanos = 0, magos = 0, hobbits = 0;

  for (let i = 0; i < n; i++) {
    const soldado = lines.shift().split(' ');
    const raca = soldado[1];

    switch (raca) {
      case 'A':
        anoes++;
        break;
      case 'E':
        elfos++;
        break;
      case 'H':
        humanos++;
        break;
      case 'M':
        magos++;
        break;
      case 'X':
        hobbits++;
        break;
      default:
        console.log("Opção inválida");
    }
  }

  const resultado = [
    `${hobbits} Hobbit(s)`,
    `${humanos} Humano(s)`,
    `${elfos} Elfo(s)`,
    `${anoes} Anao(oes)`,
    `${magos} Mago(s)`
  ];

  resultado.forEach(function (elemento) {
    console.log(elemento);
  }
);
