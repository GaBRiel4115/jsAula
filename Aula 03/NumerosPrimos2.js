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
}//function fVerificaPrimo(num)
 
function fImprimirTodosPrimos(num){
    for(let k=num; k>=2; k--){
        let ehPrimo = fVerificaPrimo(k);
        if(ehPrimo){
            console.log("O número ["+ k +"] é primo!")
        }//if
    }//for
}//function fImprimirTodosPrimos(num)
 
 
let numero = parseInt(prompt("Digite um número: "))
fImprimirTodosPrimos(numero);