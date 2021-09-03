const API_KEY = `11436152c32fc956973e902520d7e0a8`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setCityName = (id, cityName) => {
    document.getElementById(id).innerText = cityName;
}

const displayTemperature = temperature => {
    setCityName('display-city', temperature.name);
    setCityName('temperature', temperature.main.temp);
    setCityName('condition', temperature.weather[0].main);
    const imgUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('imgIcon');
    imgIcon.setAttribute('src', imgUrl);
}