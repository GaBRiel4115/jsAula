let contador = 1;
 
const n = parseInt(prompt('Digite um número de repetições:'));
 
while (contador <= n) {
    if(contador % 2 ==0){
        console.log(contador);
    }
  contador++;
}