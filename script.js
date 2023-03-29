function IMC() {
    
    let pesox =  document.getElementById("peso").value 
    let alt = document.getElementById("altura").value
    
    let imc = pesox / Math.pow(alt, 2)
    document.getElementById('imc').innerText = `Seu IMC é: ${imc.toFixed(1)}`
    
    if (imc < 18.5){
        document.getElementById('resultado').innerText = `Você está abaixo do peso!`
        let aparecer = document.getElementById("resultado")
        aparecer.addEventListener("mouseover", ()=>{ 
        aparecer.style.color = "red"
    })
    }

    if (imc >= 18.5 && imc<=24.9){
        document.getElementById('resultado').innerText = `Você está no peso ideal. Parabéns!`
        let aparecer = document.getElementById("resultado")
        aparecer.addEventListener("mouseover", ()=>{ 
        aparecer.style.color = "green"
    })
    }

    if (imc >= 25 && imc<= 29.9){
        document.getElementById('resultado').innerText = `Você está pouco acima do peso.`
        let aparecer = document.getElementById("resultado")
        aparecer.addEventListener("mouseover", ()=>{ 
        aparecer.style.color = "yellow"
    })
    }

    if (imc >= 30 && imc<= 34.9){
        document.getElementById('resultado').innerText = `Obesidade grau I`
        let aparecer = document.getElementById("resultado")
        aparecer.addEventListener("mouseover", ()=>{ 
        aparecer.style.color = "orange"
    })
    }
    if (imc >= 35 && imc<= 39.9){
        document.getElementById('resultado').innerText = `Obesidade grau II`
        let aparecer = document.getElementById("resultado")
        aparecer.addEventListener("mouseover", ()=>{ 
        aparecer.style.color = "orangered"
    })
    }
    if ( imc>= 40){
        document.getElementById('resultado').innerText = `Obesidade grau III`
        let aparecer = document.getElementById("resultado")
        aparecer.addEventListener("mouseover", ()=>{ 
        aparecer.style.color = "red"
    })
    }
    
    
}
