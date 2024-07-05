const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

function computeTemp(event) {
    let currentValue = +event.target.value;

switch (event.target.name) {
case "Celcius":
    kelvinEl.value = currentValue + 273.15;
    fahrenheitEl.value = currentValue * 1.8 + 32;
    console.log("fk")
     break;
     case "fahrenheit":
     celciusEl.value =( currentValue - 32) / 1.8;
     kelvinEl.value = (currentValue -32) / 1.8 + 273.15;
     console.log("ck")
      break;
      case "Kelvin":
      celciusEl.value = currentValue - 273.15;
      fahrenheitEl.value = (currentValue -273.15) * 1.8 + 32 ;
     break;
 default:
        break;
    
}

}
