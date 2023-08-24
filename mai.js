
const form = document.getElementById('form-consultar')




function ValidarFormulario( valorA, valorB){
    return valorB > valorA
}




form.addEventListener('submit', function(e) {
    
    e.preventDefault();
 
const valorA= document.getElementById("numero-1").value;
const valorB= document.getElementById("numero-2").value;
const mensagemSucesso = `Tudo Correto o Valor B: ${valorB} é maior que o Valor A: ${ valorA }`

formEValido = ValidarFormulario(valorA, valorB)
if(formEValido){
   alert(mensagemSucesso)
   valorA=' '
   valorB=' '
}
else if (valorA == valorB ){
    alert("Nao é Valido, valores iguais")
}
else {
    alert("Nao é valido,valor de A maior que B")
}




}

)





console.log(form)

































const mensagemSucesso = `Tudo Correto com os valores`