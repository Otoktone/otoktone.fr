/*
*	WEATHER API
*/

const weatherIcons = {
    "Rain" : "wi wi-day-rain",
    "Clouds" : "wi wi-day-cloudy",
    "Clear" : "wi wi-day-sunny",
    "Snow" : "wi wi-day-snow",
    "Mist" : "wi wi-day-fog",
    "Drizzle" : "wi wi-day-sleet",
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}


async function weather() {

    const ip = await fetch('https://api.ipify.org?format=json')
    .then(resultat => resultat.json())
    .then(json => json.ip)

    const city = await fetch('https://freegeoip.app/json/' + ip)
    .then(resultat => resultat.json())
    .then(json => json.city)

    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e2c99851fdc7150d11b1de71c5bfbcb&lang=fr&units=metric`)
    .then(resultat => resultat.json())
    .then(json => json)

    //console.log(weather);

	displayWeatherInfos(weather);
}

function displayWeatherInfos(data) {
	const name = data.name;
	const temperature = data.main.temp;
	const conditions = data.weather[0].main;
	const description = data.weather[0].description;

	document.querySelector('#city').textContent = name;
	document.querySelector('#temperature').textContent = Math.round(temperature) + '°C';
	document.querySelector('#description').textContent = capitalize(description);
    document.querySelector('i.wi').className = weatherIcons[conditions];

    document.querySelector('#weather').className = conditions.toLowerCase();

}

weather();
