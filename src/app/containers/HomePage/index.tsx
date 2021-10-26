import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Navbar } from '../../components/navbar';
import { TopSection } from './topSection';
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
			<Navbar />
			<TopSection />
			<LeaseSteps />
			<Categories />
			<AboutUs />
			<Footer />
		</PageContainer>
	);
}
