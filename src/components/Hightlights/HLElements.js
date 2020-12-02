import styled from 'styled-components';

import { FaLocationArrow } from 'react-icons/fa';

export const HLWrapper = styled.div``;

export const HLContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const HLTitle = styled.div`
	padding: 10px;
	font-weight: bold;
	font-size: 24px;
	line-height: 28px;
	color: #e7e7eb;
`;

export const HLInfoWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		width: 100%;
	}
`;
export const HLCard = styled.div`
	width: 45%;
	height: 204px;
	margin: 0.5rem;
	background: #1e213a;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 768px) {
		width: 80%;
	}
`;

export const HLCardTitle = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #e7e7eb;
`;

export const HLCardInfo = styled.div`
	width: 80%;
	font-weight: bold;
	font-size: 64px;
	line-height: 75px;
	color: #e7e7eb;
	display: flex;
	align-items: baseline;
	justify-content: center;
	margin: 10px;
`;

export const HLCardSmall = styled.div`
	font-weight: normal;
	font-size: 35px;
	line-height: 75px;
	color: #e7e7eb;
	margin-left: 10px;
`;

export const HLCardInfobis = styled.div`
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	color: #e7e7eb;
	min-width: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
`;

export const IconWrapper = styled.div`
	border-radius: 50%;
	height: 100%;
	width: 30px;
	background: gray;
	color: #fff;
	margin-right: 5px;
	padding: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const IconArrow = styled(FaLocationArrow)`
	height: 80%;
	width: 80%;
`;

export const ProgressWrapper = styled.div`
	width: 100%;
	height: 100%;
`;
export const ProgressNum = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2px;
`;

export const Progress = styled.div`
	position: relative;
	background: #fff;
	-moz-border-radius: 25px;
	-webkit-border-radius: 25px;
	border-radius: 25px;
	width: 100%;
	height: 10px;
`;

export const Bar = styled.span.attrs((props) => ({
	width: props.width,
}))`
	display: block;
	height: 100%;
	background: #ffec65;
	border-radius: 8px 20px 20px 8px;
	position: relative;
	overlay: hidden;
	-moz-border-radius: 25px;
	-webkit-border-radius: 25px;
	border-radius: 25px;
	width: ${(props) => props.width}%;
`;

export const ProgressPorcentage = styled.div`
	width: 100%;
	margin-top: 2px;
	text-align: right;
`;
