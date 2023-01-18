const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numeros = '0123456789'.split('');

const inputDeSenha = document.querySelector('#passwordLogin');

inputDeSenha.addEventListener('change', function(event){
    const senha = event.target.value;
    let temLetra = false;
    let temNum = false;

    for(i=0;i<senha.length;i++){
        if(letras.includes(senha[i])){
            temLetra = true;
            continue;
        }
        if(numeros.includes(senha[i])){
            temNum = true;
            continue;
        }
    }

    if(!(temNum && temLetra)){
        event.preventDefault();
    }
})