
const titulo = "Generation"

function maiuscula(nome) {
    
    return nome.toUpperCase()
 
 }
 
 function minuscula (nome) {
     return nome.toLowerCase()
 }
 
 
 function totalLetra(nome){
 
     var total = nome.length
     return "Total de letras: " + total
 }

 //para que estas funções fiquem acessíveis para outro código
 //vamos ter que exportar as funções
 module.exports = {
     maiuscula,
     minuscula,
     totalLetra,
     titulo // constante
 }
 