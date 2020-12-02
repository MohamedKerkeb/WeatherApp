import styled from 'styled-components';

export const FiveDaysWrapper = styled.div`
	color: #fff;
	padding: 10px 0;
`;

export const FiveDaysContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media only screen and (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: flex-start;
	}
`;

export const FiveDaysCapsule = styled.div`
	height: 177px;
	width: 150px;
	background: #1e213a;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

export const FiveDaysDays = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
`;
export const FiveDaysState = styled.div`
	height: 62px;
	width: 62px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0;

	> img {
		width: 100%;
		height: 100%;
	}
`;

export const FiveDaysMaxMinWrapper = styled.div`
	margin: 10px 0;
	display: flex;
	justify-content: space-around;
	width: 100%;
`;

export const FiveDaysMax = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #e7e7eb;
`;
export const FiveDaysMin = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #a09fb1;
`;
