import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';

const Container = styled.div`
	${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
    bg-gray-800
  `};
`;

const InnerContainer = styled.div`
	${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
    justify-around
  `};
`;

const BottomContainer = styled.div`
	${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

const CopyrightText = styled.small`
	font-size: 12px;
	${tw`
    text-gray-300
  `}
`;

const AboutContainer = styled.div`
	${tw`
    hidden
    md:flex
    md:flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    
  `};
`;

const AboutText = styled.p`
	${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `};
`;

const SectionContainer = styled.div`
	${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;

const LinksList = styled.ul`
	${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
	${tw`
    mb-3
  `};
	& > a {
		${tw`
      text-sm
    text-white
      transition-all
      hover:text-gray-200
    `};
	}
`;

const HeaderTitle = styled.h3`
	${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;

const HorizontalContainer = styled.div`
	${tw`
    flex
    items-center
    mb-2
  `};
`;

const Icon = styled.span`
	${tw`
    w-9
    h-9
    rounded-full
    bg-green-600
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`;

const SmallText = styled.h6`
	${tw`
    text-sm
    text-white
  `};
`;

export function Footer() {
	return (
		<Container>
			<InnerContainer>
				<AboutContainer>
					<Logo />
					<AboutText>
						Yourcar is a Car renting and selling company located in many
						countries across the world which has high quality cars and top rated
						service.
					</AboutText>
				</AboutContainer>

				<SectionContainer>
					<HeaderTitle>Green Lease</HeaderTitle>
					<LinksList>
						<ListItem>
							<a href='#'>Home</a>
						</ListItem>
						<ListItem>
							<a href='#'>Categories</a>
						</ListItem>
						<ListItem>
							<a href='#'>Services</a>
						</ListItem>
					</LinksList>
				</SectionContainer>

				<SectionContainer>
					<HeaderTitle>Contact</HeaderTitle>
					<HorizontalContainer>
						<Icon>
							<FontAwesomeIcon icon={faPhoneAlt} />
						</Icon>
						<SmallText>+91 555-234-8469</SmallText>
					</HorizontalContainer>
					<HorizontalContainer>
						<Icon>
							<FontAwesomeIcon icon={faEnvelope} />
						</Icon>
						<SmallText>info@greenleasecars.com</SmallText>
					</HorizontalContainer>
				</SectionContainer>
			</InnerContainer>
			<BottomContainer>
				<CopyrightText>
					Copyright &copy; {new Date().getFullYear()} GreenLease. All rights
					reserved.
				</CopyrightText>
			</BottomContainer>
		</Container>
	);
}
