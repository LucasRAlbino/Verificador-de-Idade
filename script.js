function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById('txtano')
    var res = document.getElementById('resultado')

    if(nascimento.value.length == 0 || nascimento.value > ano){
        window.alert('[ERRO] Preencha os dados novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nascimento.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './fotos/criança-m.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './fotos/jovem-m.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', './fotos/adulto-m.jpg')
            }else{
                //idoso
                img.setAttribute('src', './fotos/idoso-m.jpg')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './fotos/criança-f.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './fotos/jovem-f.jpg')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', './fotos/adulto-f.jpg')
            }else{
                //idoso
                img.setAttribute('src', './fotos/idoso-f.jpg')
            }
        }

        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}