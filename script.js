const btnConvert = document.getElementById("btn-convert")
const measurementEl = document.getElementsByClassName("converted-data")
let inputNum = document.getElementById("input-value")


btnConvert.addEventListener("click", function () {
    const inputHolder = inputNum.value
    const metersTofeet = inputHolder * 3.281
    const feetTometers = inputHolder / 3.281
    const litersTogallons = inputHolder * 0.264172
    const gallonsToliters = inputHolder / 0.264172
    const kilogramsTopound = inputHolder * 2.20462
    const poundTokilograms = inputHolder / 2.20462

    const baseTextMetersFeet = `${inputHolder} meters = ${roundUp(metersTofeet)} feet | ${inputHolder} feet = ${roundUp(feetTometers)} feet`
    const baseTextLitersGallons = `${inputHolder} liters = ${roundUp(litersTogallons)} gallons | ${inputHolder} gallons = ${roundUp(gallonsToliters)} liters`
    const baseTextkilosPounds = `${inputHolder} kilos = ${roundUp(kilogramsTopound)} pounds | ${inputHolder} pounds = ${roundUp(poundTokilograms)} kilos`

    let baseTextArr = [baseTextMetersFeet, baseTextLitersGallons, baseTextkilosPounds]

    if (inputHolder) {
        for (let i = 0; i < measurementEl.length; i++) {
            measurementEl[i].textContent = `${baseTextArr[i]}`
        }
    } else {
        alert("Please input a number to convert!")
    }

})


function roundUp(num) {
    let roundedUp = Number(num).toFixed(3)
    return roundedUp
}




// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos