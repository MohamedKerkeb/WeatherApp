import React, { useState } from 'react';
import Days from '../../components/Days';
import FiveDays from '../../components/FiveDays';
import Hightlights from '../../components/Hightlights';
import Sidebar from '../../components/Sidebar';

import { HomeContainer, HomeLeft, HomeRight, HomeWrapper } from './HomeElements';

const Home = ({ city, days, five, getQuery }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<HomeWrapper>
				<HomeContainer>
					<HomeLeft>
						<Sidebar isOpen={isOpen} toggle={toggle} getQuery={getQuery} />
						<Days city={city} days={days} toggle={toggle} />
					</HomeLeft>
					<HomeRight>
						<FiveDays fiveDays={five} />
						<Hightlights days={days} />
					</HomeRight>
				</HomeContainer>
			</HomeWrapper>
		</>
	);
};

export default Home;
