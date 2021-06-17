const long = document.getElementById("long_id");
const lat = document.getElementById("lat_id");
const sub_btn = document.querySelector(".submit_btn");


const fecthData = () => {
	fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${long.value}&lat=${lat.value}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "8d7efb23bbmsh74c2179adf8a2c0p153309jsna428f531eb03",
			"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
		}
	})
	.then(response => {
		let result = response.json()
		console.log(result); //just for debugging
		result.then(data => {
			document.getElementById("country-code").innerHTML = "Country code : "+data.data[0].country_code;
			document.getElementById("city-name").innerHTML = "City : "+data.data[0].city_name;
			document.getElementById("temp").innerHTML = "Temperature : "+data.data[0].app_temp;
			document.getElementById("aqi").innerHTML = "Air quality index : "+data.data[0].aqi;
			document.getElementById("sunrise-time").innerHTML = "Sunrise : "+data.data[0].sunrise;
			document.getElementById("sunset-time").innerHTML = "Sunset : "+data.data[0].sunset;
			document.getElementById("timezone").innerHTML = "Timezone : "+data.data[0].timezone;
			document.getElementById("weather-desc").innerHTML = "Weather : "+data.data[0].weather.description;
		})
	})
	.catch(err => {
		console.error(err);
	});
}

sub_btn.addEventListener('click', fecthData);
