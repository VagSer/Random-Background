function createNewGrad() {
    let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    let hexcode1 = '#'
    let hexcode2 = '#'

    for (let i = 0; i < 6; i++) {
        hexcode1 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
        hexcode2 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
    }
    document.getElementsByTagName('body')[0].style.background = 'linear-gradient(to right, '+ hexcode1 + ', ' + hexcode2 + ')'
    document.getElementById('background').innerHTML='background: ' + document.getElementsByTagName('body')[0].style.background
}


function createNewColor() {
    let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    let newColor = '#'
    for (let i = 0; i < 6; i++) {
        newColor += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
    }
    document.getElementsByTagName('body')[0].style.background = newColor
    document.getElementById('background').innerHTML='background: ' + document.getElementsByTagName('body')[0].style.background
}
