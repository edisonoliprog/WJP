var i = 0
function animadoBotão(){
    bootbotao = setTimeout("animadoBotão()", 3000)
    i = i + 1
    if (i == 4)	{
        i = 1
    };
    if(i == 1){
        document.form_botao.animado.value = "W&BJump Moda's"
    }
    if(i == 2){
        document.form_botao.animado.value = "* Promoções do dia *"
    }
    if(i == 3){
        document.form_botao.animado.value = "Clique aqui!!"
    }

}

function link(){
    if (botao == 1)
        {location.href="http://www.google.com.br"}
}

setTimeout("animadoBotão()", 1)

