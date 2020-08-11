let num = [5, 3, 2, 8, 7]
// num.push(7)
num.sort()
//num.push(5)
console.log(num)
console.log(`O vetor tem ${num.length} posíções`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)

if (pos == -1) {
 console.log('Desculpe. Valor não encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}