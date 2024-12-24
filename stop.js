let timer = document.getElementById("timer")
let hh = 0
let mm = 0
let ss = 0
let ms = 0

let myinterval;

function pad(n) {
    return n.toString().padStart(2, '0')
}
function start() {
    myinterval = setInterval(() => {
        ms++
        if (ms === 100) {
            ms = 0
            ss++
        }
        if (ss === 59) {
            ss = 0
            mm++
        }
        if (mm === 59) {
            mm = 0
            hh++
        }
        timer.innerHTML = `${pad(hh)}<sub>HH</sub>: ${pad(mm)} <sub>MM</sub> : ${pad(ss)} <sub>SS</sub> <sub>${pad(ms)} <sub>MS</sub></sub>`
    }, 10)
}
function stop() {
    clearInterval(myinterval)
}
function reset() {
    stop()
    hh = 0
    mm = 0
    ss = 0
    ms = 0
    timer.innerHTML = `${hh}<sub>HH</sub>: ${mm} <sub>MM</sub> : ${ss} <sub>SS</sub> <sub>${ms} <sub>MS</sub></sub>`
}
function lap() {
    let div = document.createElement("div")
    div.innerHTML = `${pad(hh)}HH: ${pad(mm)} MM: ${pad(ss)} SS :${pad(ms)} MS`
    laptime.appendChild(div)
}