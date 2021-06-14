import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
	faCarSide,
	faEnvelope,
	faHandsHelping,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
	box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.2);
	${tw`
      w-full
      flex
      flex-col
      items-center
      pt-3
      pb-3
      lg:pt-6
      lg:pb-6
    `};
`;

const Title = styled.h2`
	${tw`
      text-3xl
      lg:text-5xl
      text-gray-800
      font-extrabold
    `};
`;

const StepsContainer = styled.div`

	${tw`
      flex
      justify-evenly
      flex-wrap
      mt-7
      lg:mt-16
    `};
`;

const StepContainer = styled.div`
	${tw`
      flex
      flex-col
      md:w-96
      items-center
      m-3
    `};
`;

const Step = styled.div`
	box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.6);
	${tw`
      flex
      rounded-lg
      items-center
      justify-center
      p-6
    `};
`;

const StepTitle = styled.h4`
	${tw`
      text-gray-800
      text-lg
      font-semibold
      mt-4
    `};
`;

const StepDescription = styled.p`
	${tw`
      w-10/12
      text-xs
      md:text-sm
      text-center
      text-gray-600
      
    `};
`;

const StepIcon = styled.span`
	${tw`
      text-green-700
      text-3xl
    `};
`;

export function LeaseSteps() {
	return (
		<Container>
			<Title>Leasing steps</Title>
			<StepsContainer>
				<StepContainer>
					<Step>
						<StepIcon>
							<FontAwesomeIcon icon={faCarSide} />
						</StepIcon>
					</Step>
					<StepTitle>Choose a vehicle</StepTitle>
					<StepDescription>
						Find the car what is perfectly fit to you
					</StepDescription>
				</StepContainer>
				<StepContainer>
					<Step>
						<StepIcon>
							<FontAwesomeIcon icon={faEnvelope} />
						</StepIcon>
					</Step>
					<StepTitle>Wait for our offer</StepTitle>
					<StepDescription>We are going to send you our offer</StepDescription>
				</StepContainer>
				<StepContainer>
					<Step>
						<StepIcon>
							<FontAwesomeIcon icon={faHandsHelping} />
						</StepIcon>
					</Step>
					<StepTitle>Make an agreement</StepTitle>
					<StepDescription>
						Get the lease contract with your dream car
					</StepDescription>
				</StepContainer>
			</StepsContainer>
		</Container>
	);
}
