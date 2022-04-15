let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

let createNewLinearGrad = () => {
    let [hexcode1, hexcode2]  = ['#', '#']

    for (let i = 0; i < 6; i++) {
        hexcode1 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
        hexcode2 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
    }
    [document.querySelector('#gradColorL1').value, document.querySelector('#gradColorL2').value] = [hexcode1, hexcode2]
    document.querySelector('#gradDirection').value=Math.floor(Math.random()*359)
    setNewLinearGrad()
}

let createNewRadialGrad = () => {
    let [hexcode1, hexcode2]  = ['#', '#']

    for (let i = 0; i < 6; i++) {
        hexcode1 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
        hexcode2 += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
    }

    [document.querySelector('#gradColorR1').value, document.querySelector('#gradColorR2').value]=[hexcode1, hexcode2] // меняем цвет
    [document.querySelector('#centerPositionX').value, document.querySelector('#centerPositionY').value] = [Math.floor(Math.random()*100), Math.floor(Math.random()*100)] //меняем позицию центра

    setNewRadialGrad()
}

let swapRadialColors = () => {
    [document.querySelector('#gradColorR1').value, document.querySelector('#gradColorR2').value] = [document.querySelector('#gradColorR2').value, document.querySelector('#gradColorR1').value]
    setNewRadialGrad()
}

let swapLinearColors = () => {
    [document.querySelector('#gradColorL1').value, document.querySelector('#gradColorL2').value] = [document.querySelector('#gradColorL2').value, document.querySelector('#gradColorL1').value]
    setNewLinearGrad()
}

let createNewColor = () => {
    let newColor = '#'
    for (let i = 0; i < 6; i++) {
        newColor += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
    }
    document.querySelector('#newColor').value=newColor
    setNewColor()
}

let setNewColor = () => {
    document.querySelector('body').style.background = document.querySelector('#newColor').value
    updateBackgroundStyle()
}

let setNewRadialGrad = () => {
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

let setNewLinearGrad = () => {
    if (document.querySelector('#gradDirection').value === '360') {
        document.querySelector('#gradDirection').value = 0
    } else if (document.querySelector('#gradDirection').value === '-1') {
        document.querySelector('#gradDirection').value = 359
    }
    document.querySelector('body').style.background = `linear-gradient(${document.querySelector('#gradDirection').value}deg, ${document.querySelector('#gradColorL1').value}, ${document.querySelector('#gradColorL2').value})`
    updateBackgroundStyle()
}

let updateBackgroundStyle = () => {
    document.querySelector('#background').innerHTML=`background: ${document.querySelector('body').style.background};`
}

let inverseColor = () => {
    let color = document.querySelector('#newColor').value
    let [colorR, colorG, colorB] = [255 - parseInt(color.slice(1, 3), 16), 255 - parseInt(color.slice(3, 5), 16), 255 - parseInt(color.slice(5), 16)]
    colorR = (colorR < 16)? `0${colorR.toString(16)}` : `${colorR.toString(16)}`
    colorG = (colorG < 16)? `0${colorG.toString(16)}` : `${colorG.toString(16)}`
    colorB = (colorB < 16)? `0${colorB.toString(16)}` : `${colorB.toString(16)}`
    color = `#${colorR}${colorG}${colorB}`
    document.querySelector('#newColor').value = color
    setNewColor()
}

let copyText = () => {
    let bgStyle = document.querySelector("#background").innerHTML;
    navigator.clipboard.writeText(bgStyle)
    .then(()=> {
        alert('Свойство фона скопировано')
    })
}