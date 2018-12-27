const basicBuild = {
    weatherBuild(cityHTML, img, tempArg, conditions ){
        let weatherContainer = document.querySelector(".weatherContainer");
        let cityName = document.createElement("h2");
        cityName.setAttribute("id", "city");
        cityName.innerHTML=cityHTML;
        weatherContainer.appendChild(cityName);

        let middleContent = document.createElement("section");
        weatherContainer.appendChild(middleContent);

        let imgIcon = document.createElement("img");
        imgIcon.setAttribute("src", img);
        imgIcon.setAttribute("alt", "iconPic");
        imgIcon.setAttribute("id", "icon");
        middleContent.appendChild(imgIcon);

        let degrees = document.createElement("section");
        degrees.setAttribute("class", "degrees")
        middleContent.appendChild(degrees);

        let temp = document.createElement("h1");
        temp.setAttribute("id", "temp")
        temp.innerHTML=tempArg
        degrees.appendChild(temp);

        let dIcon = document.createElement("span");
        dIcon.innerHTML="&#176"
        degrees.appendChild(dIcon);

        let desc = document.createElement("h3")
        desc.setAttribute("id", "desc")
        desc.innerHTML = conditions
        middleContent.appendChild(desc);
    }
}

export default basicBuild;