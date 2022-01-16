let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

function createNewLinearGrad() {
    let hexcode1 = '#'
    let hexcode2 = '#'

    for (let i = 0; i < 6; i++) {
        hexcode1 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
        hexcode2 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
    }
    document.querySelector('#gradColorL1').value=hexcode1
    document.querySelector('#gradColorL2').value=hexcode2
    document.querySelector('#gradDirection').value=Math.floor(Math.random()*359)
    setNewLinearGrad()
}

function createNewRadialGrad() {
    let hexcode1 = '#'
    let hexcode2 = '#'

    for (let i = 0; i < 6; i++) {
        hexcode1 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
        hexcode2 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
    }
    document.querySelector('#gradColorR1').value=hexcode1
    document.querySelector('#gradColorR2').value=hexcode2
    document.querySelector('#centerPositionX').value=Math.floor(Math.random()*100)
    document.querySelector('#centerPositionY').value=Math.floor(Math.random()*100)
    setNewRadialGrad()
}


function createNewColor() {
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
    updateBackgroundStyle()
}

function setNewRadialGrad() {
    if (document.querySelector('#centerPositionX').value === '101') {
        document.querySelector('#centerPositionX').value = 0
    } else if (document.querySelector('#centerPositionX').value === '-1') {
        document.querySelector('#centerPositionX').value = 100
    }
    if (document.querySelector('#centerPositionY').value === '101') {
        document.querySelector('#centerPositionY').value = 0
    } else if (document.querySelector('#centerPositionY').value === '-1') {
        document.querySelector('#centerPositionY').value = 100
    }
    document.querySelector('body').style.background = `radial-gradient(ellipse at ${document.querySelector('#centerPositionX').value}% ${document.querySelector('#centerPositionY').value}%, ${document.querySelector('#gradColorR1').value}, ${document.querySelector('#gradColorR2').value})`
    updateBackgroundStyle()
}

function setNewLinearGrad() {
    if (document.querySelector('#gradDirection').value === '360') {
        document.querySelector('#gradDirection').value = 0
    } else if (document.querySelector('#gradDirection').value === '-1') {
        document.querySelector('#gradDirection').value = 359
    }
    document.querySelector('body').style.background = `linear-gradient(${document.querySelector('#gradDirection').value}deg, ${document.querySelector('#gradColorL1').value}, ${document.querySelector('#gradColorL2').value})`
    updateBackgroundStyle()
}

function updateBackgroundStyle() {
    document.querySelector('#background').innerHTML=`background: ${document.querySelector('body').style.background};`
}


