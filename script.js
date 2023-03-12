let apiKey = 'd91f911bcf2c0f925fb6535547a5ddc9'; 

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search-input');
const weatherInfo = document.querySelector('#weather-info');

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const cityName = searchInput.value.trim();

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
		.then(response => response.json())
		.then(data => {
			const temp = data.main.temp;
			const description = data.weather[0].description;
			const cityName = data.name;
			const country = data.sys.country;
			weatherInfo.innerHTML = `The temperature in ${cityName}, ${country} is ${temp}°C with ${description}.`;
		})
		.catch(error => {
			console.log(error);
			weatherInfo.innerHTML = `Error: Could not find weather for ${cityName}.`;
		});
});