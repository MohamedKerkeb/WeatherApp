import styled from 'styled-components';

export const SearchContainer = styled.div`
	${'' /* border: 1px solid violet; */}
	width: 100%;
	height: 100%;
`;

export const SearchHeader = styled.form`
	${'' /* border: 1px solid violet; */}
`;

export const SearchContent = styled.div`
	${'' /* border: 1px solid violet; */}
`;

export const InputSearch = styled.input`
	border: 1px solid #e7e7eb;
	width: 70%;
	height: 48px;
	padding-left: 10px;
	background: #1e213a;
	color: #616475;
`;

export const SidebarButton = styled.button`
	border: none;
	background: #3c47e9;
	width: 86px;
	height: 48px;
	color: #e7e7eb;
	margin-left: 5px;
	cursor: pointer;
`;

export const SearchItem = styled.div`
	${'' /* border: 1px dashed brown; */}
	height: 35px;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #e7e7eb;
	display: flex;
	align-items: center;
	padding-left: 10px;
	margin: 10px;
	cursor: pointer;

	&:hover {
		border: 1px solid #616475;
	}
`;
