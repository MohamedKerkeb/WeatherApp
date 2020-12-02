import React from 'react';

import { FaLocationArrow } from 'react-icons/fa';

import {
	HLCard,
	HLCardInfo,
	HLCardInfobis,
	HLCardTitle,
	HLContainer,
	HLInfoWrapper,
	HLTitle,
	HLWrapper,
	HLCardSmall,
	Progress,
	IconWrapper,
	IconArrow,
	Bar,
	ProgressNum,
	ProgressPorcentage,
	ProgressWrapper,
} from './HLElements';

const Hightlights = ({ days }) => {
	return (
		<>
			<HLWrapper>
				<HLContainer>
					<HLTitle>Today's Hightlights</HLTitle>
					<HLInfoWrapper>
						<HLCard>
							<HLCardTitle>Wind status</HLCardTitle>
							<HLCardInfo>
								{Math.ceil(days.wind_speed)}
								<HLCardSmall> mph</HLCardSmall>
							</HLCardInfo>
							<HLCardInfobis>
								<IconWrapper>
									<IconArrow />
								</IconWrapper>
								{days.wind_direction_compass}
							</HLCardInfobis>
						</HLCard>
						<HLCard>
							<HLCardTitle>Humidity</HLCardTitle>
							<HLCardInfo>
								{days.humidity}
								<HLCardSmall> %</HLCardSmall>
							</HLCardInfo>
							<HLCardInfobis>
								<ProgressWrapper>
									<ProgressNum>
										<span>0</span>
										<span>50</span>
										<span>100</span>
									</ProgressNum>
									<Progress>
										<Bar width={days.humidity} />
									</Progress>
									<ProgressPorcentage>%</ProgressPorcentage>
								</ProgressWrapper>
							</HLCardInfobis>
						</HLCard>
						<HLCard>
							<HLCardTitle>Visibility</HLCardTitle>
							<HLCardInfo>
								{Math.ceil(days.visibility)}
								<HLCardSmall> miles</HLCardSmall>
							</HLCardInfo>
							<HLCardInfobis></HLCardInfobis>
						</HLCard>
						<HLCard>
							<HLCardTitle>Air Pressure</HLCardTitle>
							<HLCardInfo>
								{days.air_pressure}
								<HLCardSmall> mb</HLCardSmall>
							</HLCardInfo>
							<HLCardInfobis></HLCardInfobis>
						</HLCard>
					</HLInfoWrapper>
				</HLContainer>
			</HLWrapper>
		</>
	);
};

export default Hightlights;
