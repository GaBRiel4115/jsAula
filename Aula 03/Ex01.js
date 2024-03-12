function calcularMedia(notas) {
  let soma = 0;
  for (const nota of notas) {
    soma = soma + nota;
  }
  let resultado = soma / notas.length;
  return resultado;
}


function somatorio(notas) {
    let soma = 0;
    for (const nota of notas){
        soma = soma + nota;
    }
    return soma;
  
}

function produtorio(notas) {
    let produto = 1;
    for (const nota of notas){
        produto = produto * nota;
    }
    return produto;
  
}
 
 console.log('----------------resultado--------')
const notas = [7, 10];
const media = calcularMedia(notas);

console.log(`Média: ${media}`); // Saída: Média: 8.5

const soma = somatorio(notas);
console.log (`Somatório: ${soma}`);

const produto = produtorio(notas);
console.log (`Produtório: ${produto}`);

