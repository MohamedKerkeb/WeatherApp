import styled from 'styled-components';

export const HomeWrapper = styled.div`
	${'' /* border: 1px solid violet; */}
	background: #100e1d;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	max-height: 100%;
	height: 100vh;
	width: 100vw;
`;

export const HomeContainer = styled.div`
	${'' /* border: 1px solid red; */}
	border-radius: 24px;
	width: 100%;
	height: 80%;
	max-width: 1100px;
	display: flex;
	box-shadow: rgba(30, 33, 58, 0.5);

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		border-radius: 0;
		height: 100%;
	}
`;

export const HomeLeft = styled.div`
	${'' /* border: 1px solid violet; */}
	width: 30%;
	height: 100%;
	position: relative;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const HomeRight = styled.div`
	${'' /* border: 1px solid violet; */}
	width: 70%;
	height: 100%;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;
