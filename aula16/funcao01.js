function parimpar(n) {
    if (n%2 == 0) {
        return 'Par'
        } else {
        return 'Ímpar'
        }
}

// mostrar resultado jogando parimpar dentro de uma variável
let res = parimpar(17)
console.log(res)

// ou tra opção para mostrar o resultado sem ter que colocar dentro de uma variável
console.log(parimpar(4))