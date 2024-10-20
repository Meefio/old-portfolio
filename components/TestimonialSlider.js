// testimonial data
const testimonialData = [
	{
		image: '/t-avt-1.png',
		name: 'Anne Smith',
		position: 'Customer',
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
	},
	{
		image: '/t-avt-2.png',
		name: 'Jane Doe',
		position: 'Customer',
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
	},
	{
		image: '/t-avt-3.png',
		name: 'Jhon Doe',
		position: 'Customer',
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
	},
]

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// icons

import { FaQuoteLeft } from 'react-icons/fa'

//required modules
import { Navigation, Pagination } from 'swiper'

//image
import Image from 'next/image'


const TestimonialSlider = () => {
	return (
		<Swiper
			modules={[Pagination, Navigation]}
			spaceBetween={10}
			freeMode={true}
			pagination={{
				clickable: true,
			}}
      navigation
			className='h-max sm:h-[480px]'>
			{testimonialData.map((person, index) => {
				return (
					<SwiperSlide key={index}>
						<div className='cursor-pointer md:flex md:items-center  md:justify-center md:h-full md:pl-14 xl:pl-0'>
							<div className='flex-1 md:border-r md:border-white/30'>
								<div className='flex flex-col items-center mt-4 md:mt-0'>
									<Image src={person.image} alt='' height={120} width={120} />
									<div className='font-bold text-xl mt-4'>{person.name}</div>
									<div className='uppercase text-sms'>{person.position}</div>
								</div>
							</div>
							<div className='flex flex-col items-center mb-10 flex-[2] md:items-start md:justify-start md:text-left md:pl-8'>
								<FaQuoteLeft className='text-3xl text-white/30 my-4 md:text-5xl md:mt-0' />
								<p className='max-w-[60%] font-semibold   text-white '>{person.message}</p>
							</div>
						</div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default TestimonialSlider
