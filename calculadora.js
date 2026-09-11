function sumar(x, y) {
  return x + y;
}

function restar(x, y) {
  return x - y;
}

function multiplicar(x,y){
    return x * y;

}

function dividir (x , y){
    return x / y;

}
const x = Number(process.argv[2]);
const y = Number(process.argv[3]);

console.log("Suma:", sumar(x, y));
console.log("Resta:", restar(x, y));
console.log("Multiplicación:", multiplicar(x, y));
console.log("División:", dividir(x, y));
