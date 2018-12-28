import main from "./main"

const eventListener = {
    onClick(){
        let saveButton = document.querySelector("#searchButton")
        saveButton.addEventListener("click",eventListener.userCityValue );
    },

    userCityValue() {
        let resetDOM = document.querySelector(".weatherContainer");
        resetDOM.innerHTML = " ";
        let userCityValue = document.querySelector("#citySearch").value;
        main.weatherData(userCityValue);
     }
}

export default eventListener;