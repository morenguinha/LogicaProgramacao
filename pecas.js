// var -> O valor pode ser mudado a qualquer momento
//const => o valor não pode ser alterado
//let => o valor pode ser modificado a qualquer momento porem somente dentro do escopo

//var batata = 1 'batata é igual a 1 (= atribui valor)
// var batata == 1 'batata é igual a 1? (== comparar se são iguais)

//=== compara se são estritamente iguais (considera o tipo da variável)

//!= compara se são diferentes
// 1 < 0 '1 é menor que 0 ' 
// 1 > 0 '1 é maior que 0 ' 
// 1 <= 0 '1 é menor ou igual a 0' 
// 1 >= 0 '1 é maior ou igual a 5'


           //estruturas condicionais
//if ("5" == 5) {
    //console.log("sim")
//}else{
   // console.log("não")
//}

//if ("5" === 5) {
    //console.log("sim")
//}else{
    //console.log("não")
//}



 //Indicado apenas para comparação de estritamente igual. Pois não permite fazer muitas especificações. Indicado quando há mais de 1 elemento para comparar.

//var num = 2

//switch (num) {   
    //case 1:
    //case 2:
        //console.log("É 2.")
        //break; //Usualmente, todo 'case' tem um 'break'
    
    ///case 1:
        //console.log("É 1.")
        //break;

    //default:
        //console.log("Não sei qual é o número") //representa as condições não citadas a cima (como o 'else')
        //break;
//}

//if (num == 2){
    //console.log("É 2.")
//}else if (num == 1){
    //console.log("É 1.")
//}else{
    //console.log("Não sei qual é o número.")
//}


let min_peso = 100 //peso mínimo que a peça deve ter
let min_nome = 3 //quantidade mínima de caracteres que o nome deve ter (pois a quantidade de caracteres tem que ser maior que 2.)
let max_quant = 10 //quantidade máxima de peças


let pesoPeca = 100 
let nomePeca = "dia" 
let quantPecas = 10 

if (quantPecas <= max_quant){
    console.log("Quantidade ok.")
    
    if (nomePeca.length >= min_nome){ //lenght retorna comprimento string
        console.log("Nome ok.")

        if(pesoPeca >= min_peso){
            console.log("Peso ok, peça cadastrada com sucesso.")
        }else{
            console.log("Peso inferior a 100g, não é possível realizar o cadastro.")
        }

    }else{
        console.log("O nome possui menos que 3 caracteres, a peça não pode ser cadastrada.")
    }

}else{
    console.log("Quantidade máxima de peças excedida, não é possível realizar o cadastro.")
}
