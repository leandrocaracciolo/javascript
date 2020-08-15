
function addnumber() {
    let novonumero = document.getElementById('newnumber');
    let tab = document.getElementById('selectcampo')
    //let numerocampo = Number(novonumero.value);

    if (novonumero.value.length == 0) {
        window.alert('Por favor, digite um número!') 
        } else { 
                tab.innerHTML = ''
                let item = document.createElement('option')
                item.text = `Valor ${novonumero.value} adicionado `
                tab.appendChild(item)
                             
            }
}

function addvar() {
    let varnum = [ 7, 3, 5, 14, 12, 10 ]
    varnum.push()   
    let varsoma = varnum
    varnum.sort()
    if (varnum == 0) {
        window.alert('Nenhum valor encontrado!') 
    } else {
        resultado.innerHTML = `
        <p>Ao todo, temos ${varnum.length} números cadastrados.</p> 
        <p>O maior valor informado foi ${varnum[varnum.length - 1]}.</p>
        <p> O menor valor informado foi ${varnum[0]}. </p>
        <p>Somando todos os valores, temos .</p>
        <p>A média dos valores digitados é .</p>` 
    }

}

/*
joga um valor dentro do select
 tab.innerHTML = ''
 let item = document.createElement('option')
 item.text = `Valor ${novonumero.value} adicionado `
 tab.appendChild(item)
*/

//        resultado.innerHTML = `deu certo. Número ${novonumero.value}`;
