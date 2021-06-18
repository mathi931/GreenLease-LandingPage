import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICategory } from '../../../typings/category';
import { Category } from '../../components/category';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const MainContainer = styled.div`
	${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `}
`;

const Title = styled.h2`
	${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CategoriesContainer = styled.div`
	${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10

`}
`;

const mini: ICategory = {
	img:
		'https://png2.cleanpng.com/sh/ee303be62f2fe4248cc6062ad0161f98/L0KzQYm3VMExN5N7j5H0aYP2gLBuTgJmdpJ6hOY2dIfsisq0gBFzNZZxfdV9cnnmPcfsiPlkdJYyfNNsaXGwdMb6lPVzNaNqhtNAbISwRbLqgBRmbJJnTdM5NkCxSIK6VMc0OGM2TaQ8M0e4SIS7V8Q1NqFzf3==/kisspng-renault-twizy-car-electric-vehicle-dacia-duster-renault-5accdedab5a060.813473021523375834744.png',
	name: 'Mini',
	rate: 150,
	kmLimit: 1000,
	additionalKmCost: 0.1,
};
const economy: ICategory = {
	img:
		'https://png2.cleanpng.com/sh/abc313cd0f684401edf163c80edf1565/L0KzQYm3VcE5N5h8R91yc4Pzfri0UsAyPl57h950c4fkd7b1TfdwdJcye9N7LUKzQYm0lv9tc6R8edlubj3qf73tTgIuOmEyTdNvZUW3QLS5UBUzbGgzTKMDMkW2RoS4VcI3PmI8SaI5MUS6PsH1h5==/kisspng-2016-volkswagen-golf-car-2018-volkswagen-golf-r-20-5afe540c23e2d7.418253631526617100147.png',
	name: 'Economy',
	rate: 250,
	kmLimit: 1000,
	additionalKmCost: 0.2,
};
const fullSize: ICategory = {
	img:
		'https://png2.cleanpng.com/sh/b7b61661c642e312a96cbf3fc243ba9a/L0KzQYm3UsA1N6dxj5H0aYP2gLBuTgRme51mRd94ZHXvPcS0gBFzNaVqi95qLX3ydLbzTggufJZ4hNM2bXB3f8P6TgRme51mReJ3Zz33grL1kCBiepZzjJ9ybXHqdX68gcc4apI2fqRvNnbpQHA7V8I4OWE2TaMAMUe6SYaBV8EyQWU4RuJ3Zx==/kisspng-tesla-model-s-car-tesla-model-x-tesla-motors-tesla-png-transparent-image-5a77ba1f2f6ff0.4727101515177958711943.png',
	name: 'Fullsize',
	rate: 450,
	kmLimit: 1000,
	additionalKmCost: 0.4,
};
const premium: ICategory = {
	img:
		'https://png2.cleanpng.com/sh/a7bfa1fedf500a96c2c718c56ceb557b/L0KzQYm3VMIxN6Z5fZH0aYP2gLBuTcIxOWUyiNH7c3PrdX7qggluaZ8ySqI6Nj3zf8P6gBhmNZRmkd9qbj3mccO0UsAyPV51ReZxdX7ndcP6TcVibJI1eaZuNXa8drWATsQ0Omg4TqYCMUW1RIO6WMkzPmQASak3cH7q/kisspng-2014-porsche-cayman-2016-porsche-cayman-car-2015-p-thunders-5ada0a4e5f9fd7.4327364715242389263917.png',
	name: 'Premium',
	rate: 650,
	kmLimit: 1000,
	additionalKmCost: 0.5,
};

export function Categories() {
	const [selected, setSelected] = useState(0);

	return (
		<MainContainer>
			<Title>Our Models</Title>
			<CategoriesContainer>
				{/* <Swiper
					slidesPerView={3}
					centeredSlides={true}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					className='mySwiper'>
					<SwiperSlide>
						<Category {...mini} />
					</SwiperSlide>
					<SwiperSlide>
						<Category {...economy} />
					</SwiperSlide>
					<SwiperSlide>
						<Category {...fullSize} />
					</SwiperSlide>
					<SwiperSlide>
						<Category {...premium} />
					</SwiperSlide>
				</Swiper> */}
				<Carousel
					value={selected}
					onChange={setSelected}
					slides={[
						<Category {...mini} />,
						<Category {...economy} />,
						<Category {...fullSize} />,
						<Category {...premium} />,
					]}
					plugins={[
						'arrows',
						'clickToChange',
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 3,
							},
						},
					]}
					breakpoints={{
						640: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1,
									},
								},
							],
						},
						900: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 2,
									},
								},
							],
						},
					}}
				/>
				<Dots value={selected} onChange={setSelected} number={2} />
			</CategoriesContainer>
		</MainContainer>
	);
}
