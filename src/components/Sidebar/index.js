import React from 'react';
import Search from '../Search/index';

import { CloseIcon, Icon, SidebarContainer, SidebarWrapper } from './SidebarElements';

const Sidebar = ({ isOpen, toggle, getQuery }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} toggle={toggle}>
				<Icon>
					<CloseIcon onClick={toggle} />
				</Icon>
				<SidebarWrapper>
					<Search getQuery={getQuery} />
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
