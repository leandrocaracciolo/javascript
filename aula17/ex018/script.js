let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}



function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valors digitados é ${media}.</p>`
    }
}

/*
function adicionar() {
    if (num.value > 100 || num.value <= 0 ) {
        window.alert('Número inválido. Por favor, digite um número de 1 a 100!') 
        } else { 
                let item = document.createElement('option')
                item.text = `Valor ${num.value} adicionado `
                lista.appendChild(item)         
            }
            num.value = ''
            num.focus()
}

joga um valor dentro do select
 tab.innerHTML = ''
 let item = document.createElement('option')
 item.text = `Valor ${novonumero.value} adicionado `
 tab.appendChild(item)


resultado.innerHTML = `
        <p>Ao todo, temos ${varnum.length} números cadastrados.</p> 
        <p>O maior valor informado foi ${varnum[varnum.length - 1]}.</p>
        <p> O menor valor informado foi ${varnum[0]}. </p>
        <p>Somando todos os valores, temos .</p>
        <p>A média dos valores digitados é .</p>`

*/

//        resultado.innerHTML = `deu certo. Número ${novonumero.value}`;
