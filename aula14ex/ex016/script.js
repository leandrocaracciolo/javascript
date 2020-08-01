function calculo() {
    //Peguei os dados do formulário e transformei em números
    var ninicio = window.document.querySelector('input#ninicio')
    var n1 = Number(ninicio.value)
    var nfim = window.document.querySelector('input#nfim')
    var n2 = Number(nfim.value)  
    while (n1 <= n2) {
        resp.innerHTML = n1
        n1++
    }

     
}

