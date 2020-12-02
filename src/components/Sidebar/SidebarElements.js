import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.div`
	${'' /* border: 1px dashed green; */}
	border-radius: 24px 0 0 24px;
	background: #1e213a;
	position: absolute;
	z-index: 999;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 10% 70%;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
	${'' /* border: 1px dashed green; */}
	${'' /* position: absolute;
	top: 1.2rem;
	right: 1.5rem; */}
	background: transparent;
	font-size: 2rem;

	outline: none;
	display: flex;
	justify-content: flex-end;
`;

export const CloseIcon = styled(FaTimes)`
	color: #fff;
	cursor: pointer;
`;

export const SidebarWrapper = styled.div`
	${'' /* border: 1px dashed yellow; */}
	height: 100%;
	padding: 0 10px;
`;

export const SidebarSearch = styled.div`
	${'' /* border: 1px dashed green; */}
	padding: 10px;
`;
