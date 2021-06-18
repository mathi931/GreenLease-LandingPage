import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyle from './menuStyles';

const ListContainer = styled.ul`
	${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{ menu?: any }>`
	${tw`
	p-5
    text-sm
    md:text-base
    text-gray-300
    font-medium
    cursor-pointer
    transition
    duration-500
    ease-in-out
    hover:text-white
	hover:bg-gray-700
  `};
	${({ menu }) =>
		menu &&
		css`
			${tw`
      text-white
      text-xl
      mb-1
      p-4
      focus:text-white
      bg-transparent
      text-center
      bg-gray-600
      bg-opacity-25 
    `};
		`};
`;

export function NavItems() {
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	if (isMobile) {
		return (
			<Menu right styles={menuStyle}>
				<ListContainer>
					<NavItem menu>
						<a href='#'>Home</a>
					</NavItem>
					<NavItem menu>
						<a href='#'>Cars</a>
					</NavItem>
					<NavItem menu>
						<a href='#'>Services</a>
					</NavItem>
					<NavItem menu>
						<a href='#'>Contact Us</a>
					</NavItem>
				</ListContainer>
			</Menu>
		);
	}

	return (
		<ListContainer>
			<NavItem>
				<a href='#'>Home</a>
			</NavItem>
			<NavItem>
				<a href='#'>Cars</a>
			</NavItem>
			<NavItem>
				<a href='#'>Services</a>
			</NavItem>
			<NavItem>
				<a href='#'>Contact Us</a>
			</NavItem>
		</ListContainer>
	);
}
