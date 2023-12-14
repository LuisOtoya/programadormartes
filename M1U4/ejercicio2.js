const distancia = [1000, 10000, 30000, 100000];
console.log(distancia)
let mayor = distancia[0];
for (let i = 1; i < distancia.length; i++) {
  if (distancia[i] > mayor) {
    mayor = distancia[i];
  }
}
console.log("El número mayor es: " + mayor);