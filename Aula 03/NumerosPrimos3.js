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
 
function fImprimir_qtd_Maiores_Numeros_Primos(num, qtd){
    let contador = 0;
    for(let k=num; k>=2; k--){
        let ehPrimo = fVerificaPrimo(k);
        if(ehPrimo){
            console.log("O número ["+ k +"] é primo!")
            contador++;
            if(contador==qtd){
                console.log("O programa foi concluído com sucesso!");
                return;                
            }//if
        }//if
    }//for
}//function fImprimirTodosPrimos(num)
 
 
let numero = parseInt(prompt("Digite um número: "))
let qtdPrimos = parseInt(prompt("Digite a quantidade dos maiores números primos, se for possível: "))
fImprimir_qtd_Maiores_Numeros_Primos(numero, qtdPrimos);
 