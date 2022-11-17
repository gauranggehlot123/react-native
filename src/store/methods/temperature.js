import axios from "axios";

export async function fetchTemperature({ city, countryCode }) {
	return axios.get('http://api.openweathermap.org/data/2.5/weather', {
		params: {
			units: "metric",
			appid: "082cf4ca3fb7bde8e270485bb0bbf3a6",
			q: `${city},${countryCode}`
		},
	});
}