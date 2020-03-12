
function soma(n1, n2) {

    return (n1 + n2)

}
function subtracao(n1, n2) {

    return (n1 - n2)

}
function multiplicacao(n1, n2) {

    return n1 * n2

}
function divisao(n1, n2) {
    if(n2 != 0){
        return n1 / n2
    }
    else{
        return "Impossivel dividir por 0"
    }
   

}

//para que estas funções fiquem acessíveis para outro código
//vamos ter que exportar as funções
module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}