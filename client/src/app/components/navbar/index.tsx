import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo/index';
import { NavItems } from '../navbar/navItems';

const Container = styled.div`
	min-height: 68px;
	box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.2);
	${tw`
		z-50
        w-full
        fixed
        flex
        flex-col
        items-center
		bg-gray-800
    `}
`;
const NavbarContainer = styled.div`
	${tw`
		w-full
        max-w-screen-2xl
        flex
        flex-row
		items-center
		justify-between
        lg:pl-12
        lg:pr-12
    `}
`;

const LogoContainer = styled.div``;

export function Navbar() {
	return (
		<Container>
			<NavbarContainer>
				<LogoContainer>
					<Logo />
				</LogoContainer>
				<NavItems />
			</NavbarContainer>
		</Container>
	);
}
