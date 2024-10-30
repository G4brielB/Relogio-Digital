const horas = document.querySelector("#horas")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")

setInterval(e => {
    let dataAtual = new Date()
    let h = dataAtual.getHours()
    let m = dataAtual.getMinutes()
    let s = dataAtual.getSeconds()

    if (h < 10) s = `0${h}`
    if (m < 10) m = `0${m}`
    if (s < 10) s = `0${s}`


    horas.textContent = `${h}`
    minutos.textContent = `${m}`
    segundos.textContent = `${s}`

})