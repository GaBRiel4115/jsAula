/*
APS da Disciplina Programação em JavaScript
Unicarioca
Turma: 123N
Nome: Sérgio Monteiro
Matricula: XYZ
*/
 
//Verifica se um numero eh ou nao Primo
function fVerificaPrimo(num){
    if(num<2){
        return false;
    }//if
    for(let i=num-1; i>=2; i--){
        let resto = num % i;
        if(resto == 0){
            return false;
        }//if
    }//for
    return true;
}
 
let numero = parseInt(prompt("Digite um número: "))
let ehPrimo = fVerificaPrimo(numero)
if(ehPrimo){
    alert("O número ["+ numero +"] é primo!")
}else{
        alert("O número ["+ numero +"] NÃO é primo!")
}