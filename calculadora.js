function sumar(x, y) {
  return x + y;
}

function restar(x, y) {
  return x - y;
}

function multiplicar(x, y) {
  return x * y;
}

function dividir(x, y) {
  if (y === 0) {
    return "no se puede dividir entre cero";
  }
  return (x / y).toFixed(2);
}

function porcentaje(x, y) {
  return (x / 100) * y;
}

const x = Number(process.argv[2]);
const y = Number(process.argv[3]);

if (Number.isNaN(x) || Number.isNaN(y)) {
  console.log("Tienes que darme dos números.");
  console.log("Ejemplo: node calculadora.js 20 4");
} else {
  console.log("Suma:", sumar(x, y));
  console.log("Resta:", restar(x, y));
  console.log("Multiplicación:", multiplicar(x, y));
  console.log("División:", dividir(x, y));
  console.log("Porcentaje:", porcentaje(x, y));
}
