/* temporizador*
console.log(1)
setTimeout (() => {
    console.log('Ola em 2 segundos')
},2000)
console.log(2)
/* setTimeout é um temporizador que executa a em um determinado
espaco de tempo*/
/*console.log('contagem comeca em 5 segundos')
let count = 0
let interval =setInterval(() => {
    count++
    if ((count > 5)&&(count <= 20)){
        console.log('se passaram',"",count,"",'segundos',)
    }
},2000)*/
const fs = require('fs')
fs.readFile('exercicio1.js',(err,data)=> {
    console.log(err)
})