import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Navbar } from '../../components/navbar';
import { TopSection } from './topSection';
import { Marginer } from '../../components/marginer';
import { LeaseSteps } from './leaseSteps';
import { AboutUs } from './aboutUs';
import { Footer } from '../../components/footer';
import { Categories } from '../../containers/HomePage/categories';

const PageContainer = styled.div`
	${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
	return (
		<PageContainer>
			<Marginer direction='vertical' margin='3em' />
			<Navbar />
			<TopSection />
			<Marginer direction='vertical' margin='4em' />
			<LeaseSteps />
			<Marginer direction='vertical' margin='4m' />
			<Categories />
			<Marginer direction='vertical' margin='4m' />
			<AboutUs />
			<Marginer direction='vertical' margin='3em' />
			<Footer />
		</PageContainer>
	);
}
