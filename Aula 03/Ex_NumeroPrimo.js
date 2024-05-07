// Determinar se um número é primo.
//Definição: Um número primo é um numero natural divisivel apenas por ele mesmo e por 1.

    function verificarPrimo(num) {
        for(var i = 2; i < num; i++){
            if (num % i === 0) {
                return false // NAO PRIMO
            }
        }
        return num !== 1 // primo
    }

    var numero = 41
    var resultado = verificarPrimo(numero);
    
    if(resultado){
            console.log("O número " + numero + " é primo.");
    } else {
    console.log("O número " + numero + " não é primo.");
    }