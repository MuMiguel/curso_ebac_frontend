let formValido = false
const form = document.getElementById('formulario');

//Impedindo o envio padrão do formulário
form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    //Obtendo valores do input
    const numA = parseFloat(document.getElementById('numA').value);
    const numB = parseFloat(document.getElementById('numB').value);

    //Verificando se B é maior que A
    if (numB > numA) {
        document.getElementById('resultado').innerHTML = "Formulário válido: B é maior que A";
        document.getElementById('resultado').style.color = "green";
    }else if (numB === numA) {
        document.getElementById('resultado').innerHTML = "Formulário inválido: B é igual a A";
        document.getElementById('resultado').style.color = "yellow";
    } else {
        document.getElementById('resultado').innerHTML = "Formulário inválido, B é menor que A ";
        document.getElementById('resultado').style.color = "red";
    } 
})