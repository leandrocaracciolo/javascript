
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
                 item++            
            }
}

function addvar() {
    let varnum = [ 7, 3, 5 ]   

    if (varnum == 0) {
        window.alert('Nenhum valor encontrado!') 
    } else {
        resultado.innerHTML = `Ao todo temos ${varnum.length} números cadastrados`
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
