//Verificador de Ano Bissexto: 
//Escreva um programa que verifique se um ano fornecido pelo usuário é bissexto ou não. Um ano é 
//bissexto se for divisível por 4, exceto os anos que são divisíveis por 100, a menos que sejam divisíveis por 400. 

const ano = 2023

  if ((ano % 4 === 0 && ano % 100 !== 0 ) || ano % 400 === 0) {
    console.log ("O ano", ano, "e bissexto.");
  }else {
    console.log("O ano", ano, "nao é bissexto.");
  }

  