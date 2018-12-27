import basicBuild from "./basicBuild"
// basicBuild.weatherBuild();

function weatherData(cityName){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e213c95d948522f847a952bd55c85a47`)
    .then(weather => weather.json())
    .then(allWeather => {
             // (281.96K − 273.15) × 9/5 + 32 = 47.858°F
            let kTemperature = allWeather.main.temp
            let fTemperature = (kTemperature - 273.15) * (9/5) + 34
            let visualTemp = Math.round(fTemperature)
            let city = allWeather.name
            let conditions = allWeather.weather[0].main
            if (conditions === "Clouds"){
                let icon = "https://image.flaticon.com/icons/svg/414/414927.svg"
                basicBuild.weatherBuild(city, icon, visualTemp, conditions)
            } else if (conditions === "Rain"){
                let icon = "https://image.flaticon.com/icons/svg/414/414966.svg"
                basicBuild.weatherBuild(city, icon, visualTemp, conditions)
            } else if (conditions === "Clear") {
                let icon = "https://image.flaticon.com/icons/svg/414/414926.svg"
                basicBuild.weatherBuild(city, icon, visualTemp, conditions)
            } else if (conditions === "Fog") {
                let icon = "https://image.flaticon.com/icons/svg/414/414975.svg"
                basicBuild.weatherBuild(city, icon, visualTemp, conditions)
            } else if (conditions === "Mist"){
                let icon = "https://image.flaticon.com/icons/svg/414/414974.svg"
                basicBuild.weatherBuild(city, icon, visualTemp, conditions)
            } else {
                let icon = "https://image.flaticon.com/icons/svg/414/414968.svg"
                basicBuild.weatherBuild(city, icon, visualTemp, conditions)
            }
        })
    }
    weatherData("Nashville")

    // Links to images:
    // Rain: "https://image.flaticon.com/icons/svg/414/414966.svg"
    // Snow: "https://image.flaticon.com/icons/svg/414/414968.svg"
    // Fog: "https://image.flaticon.com/icons/svg/414/414975.svg"
    // Clouds: "https://image.flaticon.com/icons/svg/414/414927.svg"
    // Clear: "https://image.flaticon.com/icons/svg/414/414926.svg"

