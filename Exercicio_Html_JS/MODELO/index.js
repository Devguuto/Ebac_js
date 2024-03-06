const form = document.getElementById('form')

var num_a = document.getElementById('CampoA')
var num_b = document.getElementById('CampoB')

var p = document.getElementById('p')

form.addEventListener('submit', function (e){
    e.preventDefault()
    var campoA = num_a.value 
    var campoB = num_b.value
    if(campoA > campoB){
        alert(`O ${campoA} é maior que o ${campoB}`)
        p.innerHTML = "sucesso!"
    }else{
        alert(`O ${campoB} é maior que o ${campoA}`)
        p.innerHTML = "falha!"
        return
    }
}) 