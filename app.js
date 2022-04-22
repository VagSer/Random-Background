const hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

//Базовые функции для создания цветов
const createColor = () => {
    let newColor = '#'
    for (let i = 0; i < 6; i++) {
        newColor += hex_numbers[Math.floor(Math.random()*hex_numbers.length)]
    }
    return newColor
}

const inverseColor = (color) => {
    let [colorR, colorG, colorB] = [255 - parseInt(color.slice(1, 3), 16), 255 - parseInt(color.slice(3, 5), 16), 255 - parseInt(color.slice(5), 16)]
    colorR = (colorR < 16)? `0${colorR.toString(16)}` : `${colorR.toString(16)}`
    colorG = (colorG < 16)? `0${colorG.toString(16)}` : `${colorG.toString(16)}`
    colorB = (colorB < 16)? `0${colorB.toString(16)}` : `${colorB.toString(16)}`
    let newColor = `#${colorR}${colorG}${colorB}`
    return newColor
}

const updateBackgroundStyle = () => {
    document.querySelector('#background').innerHTML=`background: ${document.querySelector('body').style.background};`
}

const copyText = () => {
    let bgStyle = document.querySelector("#background").innerHTML;
    navigator.clipboard.writeText(bgStyle)
    .then(()=> {
        alert('Свойство фона скопировано')
    })
}

const getRandomNumber = (max) => Math.floor(Math.random()*max)

//Функции create создают новое случайным образом
const createNewLinearGrad = () => {
    [document.querySelector('#gradColorL1').value, document.querySelector('#gradColorL2').value] = [createColor(), createColor()]
    document.querySelector('#gradDirection').value=getRandomNumber(359)
    setNewLinearGrad()
}

const createNewRadialGrad = () => {
    [document.querySelector('#centerPositionX').value, document.querySelector('#centerPositionY').value] = [getRandomNumber(100), getRandomNumber(100)]
    
    document.querySelector('#gradColorR1').value = createColor()
    document.querySelector('#gradColorR2').value = createColor() 

    setNewRadialGrad()
}

const createNewColor = () => {
    document.querySelector('#newColor').value=createColor()
    setNewColor()
}

//Функции swap меняют местами цвета в градиентах
const swapRadialColors = () => {
    [document.querySelector('#gradColorR1').value, document.querySelector('#gradColorR2').value] = [document.querySelector('#gradColorR2').value, document.querySelector('#gradColorR1').value]
    setNewRadialGrad()
}

const swapLinearColors = () => {
    [document.querySelector('#gradColorL1').value, document.querySelector('#gradColorL2').value] = [document.querySelector('#gradColorL2').value, document.querySelector('#gradColorL1').value]
    setNewLinearGrad()
}

//Функции set устанавливают конкретное свойство фона
const setNewColor = () => {
    document.querySelector('body').style.background = document.querySelector('#newColor').value
    updateBackgroundStyle()
}

const setNewRadialGrad = () => {
    document.querySelector('body').style.background = `radial-gradient(ellipse at ${document.querySelector('#centerPositionX').value}% ${document.querySelector('#centerPositionY').value}%, ${document.querySelector('#gradColorR1').value}, ${document.querySelector('#gradColorR2').value})`
    updateBackgroundStyle()
}

const setNewLinearGrad = () => {
    document.querySelector('body').style.background = `linear-gradient(${document.querySelector('#gradDirection').value}deg, ${document.querySelector('#gradColorL1').value}, ${document.querySelector('#gradColorL2').value})`
    updateBackgroundStyle()
}

//Функции inverse делают инверсию фона
const inverseNewColor = () => {
    document.querySelector('#newColor').value = inverseColor(document.querySelector('#newColor').value)
    setNewColor()
}

const inverseRadialGrad = () => {
    document.querySelector('#gradColorR1').value = inverseColor(document.querySelector('#gradColorR1').value)
    document.querySelector('#gradColorR2').value = inverseColor(document.querySelector('#gradColorR2').value)
    setNewRadialGrad()
}

const inverseLinearGrad = () => {
    document.querySelector('#gradColorL1').value = inverseColor(document.querySelector('#gradColorL1').value)
    document.querySelector('#gradColorL2').value = inverseColor(document.querySelector('#gradColorL2').value)
    setNewLinearGrad()
}