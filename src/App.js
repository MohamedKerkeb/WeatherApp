import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import data from './data/weather.json';

import Home from './Pages/Home';

import './App.css';

const App = () => {
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState([]);
	const [fiveDays, setFiveDays] = useState([]);
	const [query, setQuery] = useState('2487956');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const URL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${query}/`;

	useEffect(() => {
		// const fetchData = async () => {
		// 	setIsError(false);
		// 	setIsLoading(true);
		// 	try {
		// 		const result = await Axios.get(URL);
		// 		console.log(result.data.consolidated_weather);
		// 		setWeather(result.data.consolidated_weather[0]);
		// 		setFiveDays(result.data.consolidated_weather.slice(1, 6));
		// 		setCity(result.data.title);
		// 	} catch (error) {
		// 		console.error(error);
		// 		setIsError(true);
		// 	}
		// 	setIsLoading(false);
		// };
		// fetchData();

		setWeather(data.consolidated_weather[0]);
		setFiveDays(data.consolidated_weather.slice(1, 6));
		setCity(data.title);
	}, [query]);

	const getQuery = (q) => {
		setQuery(q);
	};

	console.log(fiveDays);
	return (
		<>
			<div>
				{isError && <div>Something went wrong...</div>}
				{isLoading ? <div>Loading...</div> : <Home days={weather} city={city} five={fiveDays} getQuery={getQuery} />}
			</div>
		</>
	);
};

export default App;
