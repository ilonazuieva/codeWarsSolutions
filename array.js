function race(v1, v2, g) {
    if (v1 >= v2) return null;
    let time = g/(v2- v1)
    let timeinSec = 3600* time;
    let hour = Math.floor(timeinSec / 3600)
    let minutes = Math.floor((timeinSec % 3600) / 60)
    let sec = Math.floor(timeinSec % 60)
    return [hour,minutes,sec]
}

//https://www.codewars.com/kata/55e2adece53b4cdcb900006c