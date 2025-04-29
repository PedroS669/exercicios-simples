function verificar() {
    let data= new Date();
    let ano = data.getFullYear();
    let fano = window.document.getElementById('inputNas')
    let res = document.getElementById('res');
    let nascimento = Number(fano.value);
    

    if (fano.value.length == 0 || nascimento > ano) {
        window.alert("ERRO: DIGITE UM ANO VALIDO")
    } else {
        let sex = document.getElementsByName('radsex');
        let idade = ano - nascimento
        genero = ''
        let img = document.getElementById('img');
        
        if (sex[0].checked) {
            genero= 'Masculino'
            if (idade > 0 && idade <= 12) {
                img.src = 'fotos/menino.jpeg'
            } else if (idade > 12 && idade < 18) {
                img.src = 'fotos/homem.jpeg'
            } else if (idade >= 18 && idade < 60) {
                img.src = 'fotos/adulto.jpeg'
            } else if (idade >=60) {
                img.src= 'fotos/velho.jpeg'
            }
        } else if (sex[1].checked) {
            genero= 'Feminino'
            if (idade > 0 && idade <= 12) {
                img.src = 'fotos/menina.jpeg'
            } else if (idade > 12 && idade < 18) {
                img.src = 'fotos/mulher.jpeg'
            } else if (idade >= 18 && idade < 60) {
                img.src = 'fotos/adulta.jpeg'
            } else if (idade >= 60) {
                img.src= 'fotos/velha.jpeg'
            }
        } 
        
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
        res.appendChild(img)  
    }
}