var número = parseInt(Math.random() * 1001)
var numTentativas = 10
    var inicio = confirm('Começar?') 
    if(inicio == true){
        while(chute != número){
        var chute = prompt('Boas Vindas ao Mentalismo! Digite um número de 0 a 1000.')
        if(chute == número){alert('Você Acertou! O ' + chute + ' é o número secreto.')} 
        else if(chute > número){alert('Você Errou! O número é menor que ' + chute + '. Tentativas Número: ' + numTentativas)}
        else if(chute < número){alert('Você Errou! O número é maior que ' + chute + '. Tentativa Número: ' + numTentativas)}
        if(chute != número){numTentativas = numTentativas - 1}
        if(numTentativas == 0){alert('Você Perdeu! O número secreto era ' + número + '.')}
        if(numTentativas == 0){break}
        
        }
    
    
    
    
    }