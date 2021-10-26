import {
	faCarCrash,
	faHeadset,
	faPlug,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICategory } from '../../../typings/category';
import { Button } from '../button';

interface ICategoryProps extends ICategory {}

const CardContainer = styled.div`
	width: 18em;
	min-height: 21em;
	max-height: 23em;
	box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
	${tw`
        flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
`}
`;

const CardImage = styled.div`
	width: 100%;
	height: auto;
	img {
		width: 100%;
		height: 100%;
	}
`;

const CardTitle = styled.h3`
	${tw`
  text-base
  font-bold
  text-black
  mt-1
  mb-1
`};
`;

const RateContainer = styled.div`
	${`
        w-full
        flex
        justify-start
        mt-3
    `}
`;
const MonthlyRate = styled.h5`
	${`
        text-green-600
        font-bold
        text-sm
        mr-3
    `}
`;

const LeaseButton = styled(Button)`
	${`
        min-w-full
        mt-5
    `}
`;
const SmText = styled.p`
	color: inherit;
	${tw`
    inline-flex
    text-xs
    font-thin
  `};
`;
const Icon = styled.span`
	${tw`
    text-gray-400
    text-sm
    mr-1
  `};
`;

const DetailsContainer = styled.div`
	${tw`
    flex
    w-full
    justify-between
  `};
`;

const Detail = styled.span`
	${tw`
    flex
    items-center
  `};
`;

const Info = styled.h6`
	${tw`
    text-gray-400
    text-xs
  `};
`;

const Seperator = styled.div`
	min-width: 100%;
	min-height: 1px;
	${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;

export function Category(props: ICategoryProps) {
	const { img, name, rate, kmLimit, additionalKmCost } = props;

	return (
		<CardContainer>
			<CardImage>
				<img src={img} />
			</CardImage>
			<CardTitle>{name}</CardTitle>
			<RateContainer>
				<MonthlyRate>
					{rate}
					<SmText>/Month</SmText>
				</MonthlyRate>
			</RateContainer>
			<Seperator />
			<DetailsContainer>
				<Detail>
					<Icon>
						<FontAwesomeIcon icon={faCarCrash} />
					</Icon>
					<Info>Insurance</Info>
				</Detail>
				<Detail>
					<Icon>
						<FontAwesomeIcon icon={faPlug} />
					</Icon>
					<Info>Fast Charge</Info>
				</Detail>
				<Detail>
					<Icon>
						<FontAwesomeIcon icon={faHeadset} />
					</Icon>
					<Info>0-24 Support</Info>
				</Detail>
			</DetailsContainer>
			<LeaseButton text='Lease now' />
		</CardContainer>
	);
}
