let nota1 = parseFloat(prompt("Digite a primeira nota."))
let nota2 = parseFloat(prompt("Digite a segunda nota."))
let nota3 = parseFloat(prompt("Digite a terceira nota."))

let soma = nota1+ nota2 + nota3
let media = soma/3
alert ("A média é: " + media)

    if (media >= 7){
        alert ("Parabéns! Você foi aprovado.")
        //console.log(`O número ${numero} é par`)
    }else
        if( media >=5){
           alert("Aluno em recuperação.") 
        }else{
            alert ("Reprovado.")
    }
