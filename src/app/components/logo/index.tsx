import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogo from '../../../assets/images/logoGreenLease.png';

const LogoContainer = styled.div`
	${tw`
        flex
        items-center
		m-2
		cursor-pointer
		text-gray-100
		hover:text-white
    `};
`;
const LogoText = styled.div`
	${tw`
        text-xl
        md:text-2xl
        font-bold
    `}
`;

const Image = styled.div`
	width: auto;
	${tw`
        h-12
    `};
	img {
		width: auto;
		height: 100%;
	}
`;

export function Logo() {
	return (
		<LogoContainer>
			<Image>
				<img src={CarLogo} alt='brand-logo' />
			</Image>
			<LogoText>GreenLease</LogoText>
		</LogoContainer>
	);
}
