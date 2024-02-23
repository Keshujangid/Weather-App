import { getWeatherData } from './weatherData.js';

const hours = new Date().getHours();



export async function displayWeather(locationName) {
    document.querySelector('.entry-page').style.display = 'none';
    document.querySelector('.glass-box').style.display = 'block';


    const data = await getWeatherData(locationName);
    displayWeatherData(data);
    hourlyForecast(data);

}


 function displayWeatherData(data) {
    


    const location = document.querySelector('.location');
    location.textContent = data.location.name + ', ' + data.location.region;

    const temp = document.querySelector('.temp');
    temp.textContent = data.current.temp_c + '°C';
    document.querySelector('.today-temp').textContent = data.forecast.forecastday[0].day.avgtemp_c + '°C';
    document.querySelector('.tomorrow-temp').textContent = data.forecast.forecastday[1].day.avgtemp_c + '°C';
    document.querySelector('.after-tomorrow-temp').textContent = data.forecast.forecastday[2].day.avgtemp_c + '°C';


    const date = document.querySelector('.current-date');   
    date.textContent = data.forecast.forecastday[0].date;

    const wind = document.querySelector('.winds-data');
    wind.textContent = data.forecast.forecastday[0].day.maxwind_kph
    + ' km/h';

    const humidity = document.querySelector('.humidity-data');
    humidity.textContent = data.forecast.forecastday[0].day.avghumidity + '%';

    const weatherCondition = document.querySelector('.weather-condition');
    weatherCondition.textContent = data.forecast.forecastday[0].day.condition.text;
    document.querySelector('.today-condition').textContent = data.forecast.forecastday[0].day.condition.text;
    document.querySelector('.tomorrow-condition').textContent = data.forecast.forecastday[1].day.condition.text;
    document.querySelector('.after-tomorrow-condition').textContent = data.forecast.forecastday[2].day.condition.text;


    const feelsLike = document.querySelector('.feels-like-temp');
    feelsLike.textContent = 'feels like ' +data.current.feelslike_c+ '°C';

    
    

}



function hourlyForecast(data) {
    document.querySelector('.hourly-weather-forecast').innerHTML = '';

    for (let i = 0; i < 6; i++) {
        
        const weatherForecastItem = document.createElement('div');
        weatherForecastItem.classList.add('weather-forecast-item');


        const time = document.createElement('div');
        time.classList.add('time');
        time.textContent = hours + i + ':00';

        const temp = document.createElement('p');
        temp.classList.add('hourly-temp');
        temp.textContent = data.forecast.forecastday[0].hour[hours].temp_c + '°C';

        const condition = document.createElement('p');
        condition.classList.add('condition');
        condition.textContent = data.forecast.forecastday[0].hour[hours].condition.text;

        weatherForecastItem.appendChild(time);
        weatherForecastItem.appendChild(temp);
        weatherForecastItem.appendChild(condition);

        document.querySelector('.hourly-weather-forecast').appendChild(weatherForecastItem);
    }
};

(function futureWeather() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();

    const todayDiv = document.querySelector('.today > div');
    const tomorrowDiv = document.querySelector('.tomorrow > div');
    const afterTomorrowDiv = document.querySelector('.after-tomorrow > div');

    todayDiv.textContent = days[today];
    tomorrowDiv.textContent = days[(today + 1) % 7];
    afterTomorrowDiv.textContent = days[(today + 2) % 7];
})();


function showCurrentTime(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;

    const timeElement = document.querySelector('.current-time');
    timeElement.textContent = timeString;

}

showCurrentTime();

// Update the time every second
setInterval(showCurrentTime, 1000);



function backToEntryPage() {
    document.querySelector('.back-button').addEventListener('click', () => {
        document.querySelector('.glass-box').style.display = 'none';  
        document.querySelector('.entry-page').style.display = 'flex';
    }
    )
}

backToEntryPage();

export function refreshPage() {
    location.reload();
}
