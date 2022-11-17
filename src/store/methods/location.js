import axios from "axios";

export async function fetchLocation({ lat, lon }) {
	return axios.get('https://nominatim.openstreetmap.org/reverse', {
		params: {
			format: "geojson",
			lat,
			lon
		},
	});
}