import React from 'react';
import Shower from '../../img/Shower.png';
import Snow from '../../img/Snow.png';
import Sleet from '../../img/Sleet.png';
import Hail from '../../img/Hail.png';
import Thunderstorm from '../../img/Thunderstorm.png';
import HeavyRain from '../../img/HeavyRain.png';
import LightRain from '../../img/LightRain.png';
import HeavyCloud from '../../img/HeavyCloud.png';
import LightCloud from '../../img/LightCloud.png';
import Clear from '../../img/Clear.png';

import { FaMapMarkerAlt } from 'react-icons/fa';

import {
	DaysContainer,
	DaysDate,
	DaysHeader,
	DaysLocation,
	DaysState,
	DaysTemp,
	DaysWeather,
	DaysWeatherWrapper,
	DaysWrapper,
	DaysHeaderButton,
} from './DaysElements';

const Days = ({ city, days, toggle }) => {
	const WeatherState = () => {
		let WS = days.weather_state_name;
		// console.log(WS);
		if (WS === 'Showers') {
			WS = Shower;
		} else if (WS === 'Snow') {
			WS = Snow;
		} else if (WS === 'Sleet') {
			WS = Sleet;
		} else if (WS === 'Hail') {
			WS = Hail;
		} else if (WS === 'Thunderstorm') {
			WS = Thunderstorm;
		} else if (WS === 'Heavy Rain') {
			WS = HeavyRain;
		} else if (WS === 'Light Rain') {
			WS = LightRain;
		} else if (WS === 'Heavy Cloud') {
			WS = HeavyCloud;
		} else if (WS === 'Light Cloud') {
			WS = LightCloud;
		} else if (WS === 'Clear') {
			WS = Clear;
		}

		return WS;
	};

	WeatherState();

	console.log(new Date(days.applicable_date));

	const dateFormat = (date) => {
		// let d = new Date(date).toString().split(' ').splice(0, 3).join(' ');
		// console.log(d);

		let d = new Date(date);
		const option = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
		console.log(d.toLocaleString('en-En', option));
		return d.toLocaleString('en-En', option).slice(0, 10);
	};

	return (
		<>
			<DaysWrapper>
				<DaysContainer>
					<DaysHeader>
						<DaysHeaderButton onClick={toggle}>Search</DaysHeaderButton>
					</DaysHeader>
					<DaysWeatherWrapper>
						<DaysWeather>
							<img src={WeatherState()} alt={days.weather_state_name} />
						</DaysWeather>
						<DaysTemp>
							{Math.ceil(days.the_temp)}
							<span>°C</span>
						</DaysTemp>
						<DaysState>{days.weather_state_name}</DaysState>
						<DaysDate>Today . {dateFormat(days.applicable_date)}</DaysDate>
						<DaysLocation>
							<FaMapMarkerAlt /> {city}
						</DaysLocation>
					</DaysWeatherWrapper>
				</DaysContainer>
			</DaysWrapper>
		</>
	);
};

export default Days;
