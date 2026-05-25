let precoCombustivel = 5.79; 
let gastoMedioCombustivelPorKm = 10; 
let distanciaKmViagem = 100; 

let gastoTotalCombustivel = (distanciaKmViagem / gastoMedioCombustivelPorKm) * precoCombustivel;    
console.log("O gasto total de combustível para a viagem é: R$ " + gastoTotalCombustivel.toFixed(2));
