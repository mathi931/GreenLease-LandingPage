import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import TeslaImg from '../../../assets/images/model-s.png';
import BlobImg from '../../../assets/images/blob.svg';
import { SCREENS } from '../../components/responsive';
import { Button } from '../../components/button';

const Container = styled.div`
	min-height: 400px;
	margin-top: 8em;
	${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const LeftContainer = styled.div`
	//box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.2);
	${tw`
	rounded-lg
    w-2/3
    flex
    flex-col
	p-2
  `};
`;

const RightContainer = styled.div`
	${tw`
    w-1/3
    flex
    flex-col
    relative
    mt-20
  `};
`;

const Title = styled.h1`
	text-indent: 1em;
	${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-gray-800
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
	${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `};
`;

const BlobContainer = styled.div`
	width: 22em;
	height: 10em;
	position: absolute;
	right: -10em;
	top: -11em;
	z-index: -2;
	img {
		width: 100%;
		height: auto;
		max-height: max-content;
	}
	@media (min-width: ${SCREENS.sm}) {
		width: 35em;
		max-height: 20em;
		right: -2em;
		top: -16em;
		transform: rotate(-25deg);
	}
	@media (min-width: ${SCREENS.lg}) {
		width: 40em;
		max-height: 30em;
		right: -2em;
		top: -17em;
		transform: rotate(-30deg);
	}
	@media (min-width: ${SCREENS.xl}) {
		width: 55em;
		max-height: 35em;
		right: -25em;
		top: -24em;
		transform: rotate(-1deg);
	}
`;

const StandaloneCar = styled.div`
	width: auto;
	height: 13em;
	right: -5em;
	top: -6em;
	position: absolute;
	z-index: -1;
	img {
		width: auto;
		height: 100%;
		max-width: fit-content;
	}
	@media (min-width: ${SCREENS.sm}) {
		height: 23em;
		right: -4em;
		top: -9em;
	}
	@media (min-width: ${SCREENS.lg}) {
		height: 26em;
		right: -6em;
		top: -8em;
	}
	@media (min-width: ${SCREENS.xl}) {
		height: 32em;
		right: -8em;
		top: -9em;
	}
`;

const ButtonsContainer = styled.div`
	${tw`
    flex
    flex-wrap
    mt-4
  `};
`;

export function TopSection() {
	return (
		<Container>
			<LeftContainer>
				<Title>Get with the future, Lease Green!</Title>
				<Description>
					An electric car can be the future way for you, and for your company!
				</Description>
				<ButtonsContainer>
					<Button text='Our Complete Fleet' />
				</ButtonsContainer>
			</LeftContainer>

			<RightContainer>
				<BlobContainer>
					<img src={BlobImg} />
				</BlobContainer>
				<StandaloneCar>
					<img src={TeslaImg} />
				</StandaloneCar>
			</RightContainer>
		</Container>
	);
}
