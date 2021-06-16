import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo/index';
import { NavItems } from '../navbar/navItems';

const OutherContainer = styled.div`
	min-height: 68px;
	box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.2);
	${tw`
        w-full
        fixed
        bg-gray-600
        flex
        flex-col
        items-center
    `}
`;
const NavbarContainer = styled.div`
	${tw`
        max-w-screen-2xl
        bg-gray-200

        lg:pl-12
        lg:pr-12
    `}
`;

const LogoContainer = styled.div``;

export function Navbar() {
	return (
		<OutherContainer>
			<NavbarContainer>
				<LogoContainer>
					<Logo />
				</LogoContainer>
				<NavItems></NavItems>
			</NavbarContainer>
		</OutherContainer>
	);
}
