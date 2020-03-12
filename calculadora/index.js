// Iniciando servidor
var calcula =require("./funcoes")
var n1=2
var n2 =4

let express = require('express') //importando o módulo express
let app = express()
let port = 3000

//rota principal
                    //arrow function
app.get('/', (req,res)=>{
    res.send('<h1 style="text-align:center;color: blue">Calculadora</h1>' +
    "Soma = "+ calcula.soma(n1,n2))
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})



// //importar as funções

// var funcoes = require('../calculadora/funcoes')

// var teste = funcoes.soma(12,5)
//     console.log("Soma: "+teste)

//     teste = funcoes.subtracao(8,5)
//     console.log("Subtração: "+teste)

//     teste = funcoes.multiplicacao(56,5)
//     console.log("Multiplicação: "+teste)

//     teste = funcoes.divisao(10,2)
//     console.log("Divisão: "+teste)


   