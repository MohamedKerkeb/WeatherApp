import styled from 'styled-components';
import Bg from '../../img/Cloud-background.png';

export const DaysWrapper = styled.div`
	${'' /* border: 1px solid navy; */}
	height: 100%;
	background-color: #1e213a;
	border-radius: 24px 0 0 24px;
	color: #fff;
	background-image: url(${Bg});
	background-position: 30%;
	background-repeat: repeat;
	background-size: contain;
`;

export const DaysContainer = styled.div`
	${'' /* border: 1px solid #e66465; */}
	border-radius: 24px 0 0 24px;
	height: 100%;
	padding: 10px;
	background: linear-gradient(rgba(30, 33, 58, 0.8) 10%, rgba(30, 33, 58, 1) 75%);

	@media only screen and (max-width: 768px) {
		width: 100%;
		border-radius: 0;
	}
`;

export const DaysHeader = styled.div`
	${'' /* border: 1px solid navy; */}
	height: 10%;
`;

export const DaysHeaderButton = styled.button`
	background: #6e707a;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border: none;
	cursor: pointer;
	width: 161px;
	height: 40px;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #e7e7eb;
`;

export const DaysWeatherWrapper = styled.div`
	${'' /* border: 1px solid navy; */}
	height: 90%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 40% 20% 20% 10% 10%;

	@media only screen and (max-width: 768px) {
		height: 100vh;
	}
`;

export const DaysWeather = styled.div`
	${'' /* border: 1px solid green; */}
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	> img {
		${'' /* border: 1px solid green; */}
		width: 50%;
		height: 60%;
	}

	@media only screen and (max-width: 768px) {
	}
`;

export const DaysTemp = styled.div`
	${'' /* border: 1px solid navy; */}
	${'' /* margin: 15px; */}
	display: flex;
	align-items: flex-end;
	justify-content: center;
	font-weight: 500;
	font-size: 144px;

	> span {
		font-size: 2.8rem;
		padding-bottom: 25px;
	}
`;

export const DaysState = styled.div`
	${'' /* border: 1px solid navy; */}
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	font-size: 36px;
	${'' /* line-height: 42px; */}
	color: #a09fb1;
`;

export const DaysDate = styled.div`
	${'' /* border: 1px solid navy; */}
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	line-height: 21px;
	color: #88869d;
`;

export const DaysLocation = styled.div`
	${'' /* border: 1px solid navy; */}
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	font-size: 18px;
	line-height: 21px;
	color: #88869d;
`;
