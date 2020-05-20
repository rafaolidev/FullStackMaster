// dado um vetor de números, como poderia ser  realizada a
// soma de todos os valores utilizando reduce.


const vetor = [2,4,5,7]
const pares = vetor.filter (function (item) {
    return item % 2 === 0
})
const impares = vetor.filter (function (item) {
    return item % 2 === 1
})
const dobrado = vetor.map(function(item){
    return item * 2
    
})
const soma = (a,b) => a+b
const somatoria = vetor.reduce(soma)
console.log(vetor,somatoria)

/*dado um vetor de numeros, como poderia ser realizada a soma
de todos valores pares ultilizando reduce e filter*/
const somatoriapares = pares.reduce(soma)
console.log(pares,somatoriapares)

/*dado um vetor de numeros, como poderia ser realizada a soma
de todos valores impares ultilizando reduce e filter*/
const somatoriaimpares = impares.reduce(soma)
console.log(impares,somatoriaimpares)
/*dado um vetor de valores, retorne um objeto com quantas
vezes cada valor está presente no vetor */

const vetor2 = [1,2,3,4,5,2,1,4,3,2,'rafael','rafael']
const HowManyTimes = (agg,val) => {
    if (!agg[val]) {
        agg[val] = 0
    }
    agg[val] = agg[val] + 1
    return agg
}
const times =vetor2.reduce(HowManyTimes,{})
console.log (times)

/* uma funcao e chamada da seguinte forma:
calculadora(10,'+',20) crie o corpo da funcao de forma
que ela realize as 4 operacoes aritimeticas */
const subtracao = (a,b) => (a-b)
const divisao = (a,b) => (a/b)
const multiplicacao = (a,b) => (a*b)
const calculadora2 = (a,op,b) => op(a,b)
console.log (calculadora2(30,divisao,90))