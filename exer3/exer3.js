
function verificar() {
    let anoN = Number(document.getElementById('inputNas').value);
    let data = new Date();
    let anoA = data.getFullYear();
    let idade = anoA - anoN;
    let sexo = document.getElementsByName('radsex');
    let genero = '';
    let motiv = document.getElementById('motiv');
    
    if (anoN == 0 || anoN > anoA) {
        window.alert('ERRO: Verifique os dados e tente novamente.');
    } else {
        if (sexo[0].checked) {
            genero = 'Homem';
            if (idade > 0 && idade < 12) {
                motiv.innerHTML = 'Seja o homem que não desiste.'
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher';
        }

        // Exemplo de exibição do resultado:
        let resultado = document.getElementById('res');
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    }
}
