import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogoImg from '../../../assets/images/car-logo.png';
import CarLogo from '../../../assets/images/logoGreenLease.png';

const LogoContainer = styled.div`
	${tw`
        flex
        items-center
		m-2
    `};
`;
const LogoText = styled.div`
	${tw`
        text-xl
        md:text-2xl
        font-bold
        text-gray-800
    `}
`;

const Image = styled.div`
	width: auto;
	${tw`
        h-12
        md:h-12
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
