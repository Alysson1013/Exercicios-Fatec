function exercicio1(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var n3 = Number(document.getElementById("n3").value);
    var n4 = Number(document.getElementById("n4").value);
    var media = (n1+n2 +n3+n4)/4
     
    if (media >= 7){
        alert ("Aluno aprovado " + media)
    } else {
        alert ("Aluno Reprovado " + media )
    }


}
function exercicio2(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var m = (n1 + n2)/2
    if (m >= 0 && m <= 3){
        alert (m + "\nReprovado")
    } 
    else if(m > 3 && m <= 7){
        
        alert(m +"\n Exame")
    }
    else {
        alert (m + "\nAprovado")
    }
}
function exercicio3(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    if (n1 > n2){
        alert ("O maior número é: " + n1)
    }
    else if (n2 > n1) {
        alert ("O maior número é: " + n2)
         }
    else {
        alert ("Os números são iguais")
    }
    
}
function exercicio4(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var n3 = Number(document.getElementById("n3").value);
    if (n1 > n2 && n1 > n3){
        alert ("O maior número é: " + n1)
    }
    else if (n2 > n1 && n2 > n1) {
        alert ("O maior número é: " + n2)
         }
    else if (n3 > n1 && n3 > n2) {
        alert ("O maior número é " + n3)
    }
    else {
        alert ("Os números são iguais")
    }
    
}
function exercicio5(){
     var n1 = Number(document.getElementById("n1").value);
     var n2 = Number(document.getElementById("n2").value);
     var opr = Number(document.getElementById("opr").value);
     var res = 0 ;
     switch (opr){
         case 1:
         res = (parseInt(n1) + parseInt(n2))/2
         alert("A média entre os números é " + res)
         break;
         case 2: 
         if (n1 > n2) { 
             res = n1 - n2
         }
        else { 
            res = n2 - n1 
        }
        alert ("A subtrção entre os números é " + res)
        break;
        case 3: 
        res = (n1 * n2)
        alert ("O produto dos números é " + res)
        break;
        case 4:
        res = (n1/n2)
        alert ("A divisão do primeiro pelo segundo é " + res)
        break;
     }

}
function exercicio7(){
    var sl = Number(document.getElementById("sl").value);
    if (sl >= 500){
        alert ("O seu sálario não prescisa ser reajustado!")
    }
    else {
        sl = sl * 1.30
        alert("O seu novo salário é " + sl) 

    }
}
function exercicio22(){
    var idade = Number(document.getElementById("idade").value);
    var peso = Number(document.getElementById("peso").value);
    var risco = 0
    if (idade < 20){
        if (peso < 60){
            risco = 9
        }
        else if (peso > 60 && peso <90)
            risco = 8 
        else {
            risco = 7
        }
    }
    else if  (idade > 20 && idade < 50) 
        if (peso < 60){
            risco = 6
        }
        else if (peso > 60 && peso < 90){
            risco = 5
        }
        else{
            risco = 4 
        }
    else {
        if (peso < 60) {
            risco = 3 
        }
        else if  (peso > 60 && peso < 90){
            risco = 2
        }
        else{ 
            risco = 1
        } 
}
    alert("Você pertence ao grupo: " + risco)
}