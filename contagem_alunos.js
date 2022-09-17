/*texto: String
numeros inteiros: int
numeros decimais - float: 0,000000
numeros decimais - double: 0,0000000000000000
boolean 0 ou 1/ true or false

//-------------Estruturas de repetição------------//


//1° atr: index(contador) inicia em 0. (só vale na primeira execução)
//2° atr: Repete enquanto o contador menor que o parâmetro (array.length -> lista.comprimento)
//3° atr: index = index + 1 (muda o valor do contador a cada repetição até que atinja o valor do parâmetro.)

/*for (let index = 0; index < 10 ; index++) {
    const element = array[index];
    
}


//Específico para listas/array
array.forEach(element => { //o "arrey" pode ser trocado por outros caracteres
    
});


//Executa enquanto a condição for verdadeira
while (10 < 10) {
    
}


//Executa uma vez inicialmente e depois só repete enquanto a condição for verdadeira
do {

} while (10 < 10);*/


/*let quantidade = 5
for (let contador = 0; contador < quantidade; contador++) {

    console.log(`O número de voltas é ${contador +1}`) //interpolação//Mostra o valor do contador a cada repetição feita
}*/


/*let contador = 0
while(contador < quantidade){
    console.log("Olá")

    contador++ //Muda o valor do contador a cada repetição (evitando um looping)
}*/

/*Exercício
    Se o número for par, escreva "par" e o número correspondente
    Se o número fot ímpar, escreva "ímpar" e o número correspondente
    Se for zero, escreva zero.*/


let numeroDeAlunos = ["a", "b", "c", "d", "e"] //array é uma lista
for (let contador = 0; contador < numeroDeAlunos.length; contador++){
    
    if (contador == 0){
        console.log("Zero")
    }else if (contador % 2 == 0){
        console.log(`O número ${contador} é par.`)
    }else{
        console.log(`O número ${contador} é ímpar.`)
    }
}


/*numeroDeAlunos.forEach(cadaItem =>{ //acessa cada ítem da lista
    console.log(cadaItem)
})*/