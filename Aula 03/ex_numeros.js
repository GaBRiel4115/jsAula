let numero;
const num_referencia = parseInt(prompt("Digite um número de referência:"));
while (true) {
 numero = parseInt(prompt("Digite um número maior que "+num_referencia+" : "));
 if (numero > num_referencia) {
    break; // Sai do loop se o número for maior que num_referencia
 }
 alert("O número digitado não é maior que "+ num_referencia +". Tente novamente.");
}
alert("Número válido: " + numero);
 