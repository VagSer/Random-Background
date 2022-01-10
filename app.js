function createNewGrad() {
    let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    let hexcode1 = '#'
    let hexcode2 = '#'

    for (let i = 0; i < 6; i++) {
        hexcode1 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
        hexcode2 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
    }
    document.querySelector('#gradColor1').value=hexcode1
    document.querySelector('#gradColor2').value=hexcode2
    setNewGrad()
}


function createNewColor() {
    let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let newColor = '#'
    for (let i = 0; i < 6; i++) {
        newColor += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
    }
    document.querySelector('#newColor').value=newColor
    setNewColor()
}

function copyText() {
    let copyText = document.querySelector("#background").innerHTML;
    navigator.clipboard.writeText(copyText)
    .then(()=> {
        alert('Свойство фона скопировано')
    })
}

function setNewColor() {
    document.querySelector('body').style.background = document.querySelector('#newColor').value
    document.querySelector('#background').innerHTML='background: ' + document.querySelector('body').style.background
}

function setNewGrad() {
    document.getElementsByTagName('body')[0].style.background = 'linear-gradient(to right, '+ document.querySelector('#gradColor1').value + ', ' + document.querySelector('#gradColor2').value + ')'
    document.querySelector('#background').innerHTML='background: ' + document.getElementsByTagName('body')[0].style.background
}
