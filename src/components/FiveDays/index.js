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

import {
	FiveDaysCapsule,
	FiveDaysContainer,
	FiveDaysDays,
	FiveDaysMax,
	FiveDaysMin,
	FiveDaysState,
	FiveDaysWrapper,
	FiveDaysMaxMinWrapper,
} from './FiveDaysElements';

const FiveDays = ({ fiveDays }) => {
	console.log(fiveDays);

	const WeatherState = (f) => {
		let WS = f;
		console.log(WS);
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

		return <img src={WS} alt={WS} />;
	};

	const dateFormat = (date) => {
		// let d = new Date(date).toString().split(' ').splice(0, 3).join(' ');
		// console.log(d);

		let d = new Date(date);
		const option = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
		console.log(d.toLocaleString('en-En', option));
		return d.toLocaleString('en-En', option).slice(0, 10);
	};

	WeatherState();
	dateFormat();
	return (
		<>
			<FiveDaysWrapper>
				<FiveDaysContainer>
					{fiveDays.map((f) => (
						<FiveDaysCapsule key={f.id}>
							<FiveDaysDays>{dateFormat(f.applicable_date)}</FiveDaysDays>
							<FiveDaysState>{WeatherState(f.weather_state_name)}</FiveDaysState>
							<FiveDaysMaxMinWrapper>
								<FiveDaysMax>{Math.ceil(f.max_temp)}°C</FiveDaysMax>
								<FiveDaysMin>{Math.ceil(f.min_temp)}°C</FiveDaysMin>
							</FiveDaysMaxMinWrapper>
						</FiveDaysCapsule>
					))}
				</FiveDaysContainer>
			</FiveDaysWrapper>
		</>
	);
};

export default FiveDays;
