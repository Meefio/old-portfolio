import react, { useState } from 'react'

// icons
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaWordpress,
	FaFigma,
	FaGit,
} from 'react-icons/fa'
import { LuMonitorSmartphone, LuMessagesSquare } from 'react-icons/lu'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { BsFiletypeScss } from 'react-icons/bs'
import { SiNextdotjs, SiFramer, SiWebflow } from 'react-icons/si'
import { motion } from 'framer-motion'
import { fadeIn } from '/variants.js'
//  data

//counter
import CountUp from 'react-countup'

const aboutData = [
	{
		title: 'skills',
		info: [
			{
				title: 'Polish',
				icons: [<LuMessagesSquare />],
				progress: '100%',
			},
			{
				title: 'English',
				icons: [<LuMessagesSquare />],
				progress: '70%',
			},
			{
				title: 'HTML5',
				icons: [<FaHtml5 />],
				progress: '90%',
			},
			// <FaHtml5 />, , <FaJs />, <FaReact />, <SiNextdotjs />, <SiFramer />, <FaWordpress />, , <SiAdobexd />, <SiAdobephotoshop />
			{
				title: 'CSS3',
				icons: [<FaCss3 />],
				progress: '90%',
			},
			{
				title: 'SCSS',
				icons: [<BsFiletypeScss />],
				progress: '90%',
			},
			{
				title: 'RWD',
				icons: [<LuMonitorSmartphone />],
				progress: '90%',
			},
			{
				title: 'Webflow',
				icons: [<SiWebflow />],
				progress: '50%',
			},
			{
				title: 'JS',
				icons: [<FaJs />],
				progress: '50%',
			},
			{
				title: 'React',
				icons: [<FaReact />],
				progress: '45%',
			},
			{
				title: 'GIT',
				icons: [<FaGit />],
				progress: '70%',
			},
			{
				title: 'Figma',
				icons: [<FaFigma />],
				progress: '70%',
			},
		],
	},
	// {
	// 	title: 'awards',
	// 	info: [
	// 		{
	// 			title: 'Webby Awards - Honoree',
	// 			stage: '2011 - 2012',
	// 		},
	// 		{
	// 			title: 'Adobe Design Achievement Awards - Finalist',
	// 			stage: '2009 - 2010',
	// 		},
	// 	],
	// },
	// {
	// 	title: 'experience',
	// 	info: [
	// 		{
	// 			title: 'UX/UI Designer - XYZ Company',
	// 			stage: '2012 - 2023',
	// 		},
	// 		{
	// 			title: 'Web Developer - ABC Agency',
	// 			stage: '2010 - 2012',
	// 		},
	// 		{
	// 			title: 'Intern - DEF Corporation',
	// 			stage: '2008 - 2010',
	// 		},
	// 	],
	// },
	// {
	// 	title: 'credentials',
	// 	info: [
	// 		{
	// 			title: 'Web Development - ABC University, LA, CA',
	// 			stage: '2011',
	// 		},
	// 		{
	// 			title: 'Computer Science Diploma - AV Technical Institute',
	// 			stage: '2009',
	// 		},
	// 		{
	// 			title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
	// 			stage: '2006',
	// 		},
	// 	],
	// },
]

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

const About = () => {
	const [index, setIndex] = useState(0)
	console.log(index)

	return (
		<div id='about' className='relative min-h-screen overflow-hidden'>
			<Circles />
			<motion.div
				variants={fadeIn('right', 0.6)}
				initial='hidden'
				animate='show'
				exit='hidden'
				className='hidden xl:flex absolute bottom-0 -left-[370px] '
			>
				<Avatar />
			</motion.div>
			<div className=' container xl:max-w-[1000px] mx-auto h-screen flex flex-col items-center justify-center xl:flex-row gap-x-10'>
				<div className='w-full xl:w-1/2'>
					<motion.h1
						variants={fadeIn('right', 0.4)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='h2 z-10 text-center xl:text-left text-5xl'
					>
						About <span className='text-accent'>Me </span>
					</motion.h1>
					{/* </div> */}
					<motion.p
						variants={fadeIn('right', 0.6)}
						initial='hidden'
						animate='show'
						className='max-w-sm xl:max-w-md 2xl:max-w-xl mx-auto xl:mx-0 my-10 xl:mt-10 z-20 text-center xl:text-left'
					>
						I am 29 years old and have been working in the retail
						industry as a Product Manager for 7 years. At Lagardère
						Travel Retail, I manage the beverage category, negotiate
						commercial terms with suppliers, create sales plans,
						promotions, planograms, and set beverage prices for over
						700 convenience stores. My work requires strong analytical
						skills and proficiency in tools such as Excel. For nearly
						three years, I have been intensively developing my
						programming skills, focusing mainly on front-end
						development, particularly on technologies like React and
						Next.js in recent times. I am eager to have a conversation
						and receive any guidance on how I can further elevate my
						skills. I have a three-month notice period, which I am
						happy to dedicate to further development and learning the
						areas that will be crucial for the team. I am open to
						suggestions to best prepare myself for the new role and
						fully meet the company's expectations.
					</motion.p>
					<motion.div
						variants={fadeIn('right', 0.6)}
						initial='hidden'
						animate='show'
						className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:justify-start my-10'
					>
						<div className='pr-5  w-1/4 border-r border-gray-700 uppercase'>
							<div className=' text-4xl text-accent font-extrabold mb-2'>
								<CountUp start={0} end={1} duration={5}></CountUp>
								<span>+</span>
							</div>
							<p className='text-xs font-extrabold uppercase tracking-[1px] leading-[1.4] max-w-100px text-white'>
								year of experience
							</p>
						</div>

						<div className='px-5 w-1/4 border-r border-gray-700 '>
							<div className='text-4xl text-accent font-extrabold mb-2 justify-around'>
								<CountUp start={0} end={3} duration={5}></CountUp>
								<span>+</span>
							</div>
							<p className='text-xs font-extrabold uppercase tracking-[1px] leading-[1.4] max-w-100px text-white'>
								statisfied clients
							</p>
						</div>

						<div className='px-5 w-1/4 border-r border-gray-700'>
							<div className='text-4xl text-accent font-extrabold mb-2  justify-around'>
								<CountUp start={0} end={15} duration={5}></CountUp>
								<span>+</span>
							</div>
							<p className='text-xs font-extrabold uppercase tracking-[1px] leading-[1.4] max-w-100px text-white'>
								finished projects
							</p>
						</div>
						<div className='px-5 w-1/4 '>
							<div className='text-4xl text-accent font-extrabold mb-2 justify-around'>
								<CountUp start={0} end={10} duration={5}></CountUp>
								<span>+</span>
							</div>
							<p className='text-xs font-extrabold uppercase tracking-[1px] leading-[1.4] max-w-100px text-white'>
								Finished Coures
							</p>
						</div>
					</motion.div>
				</div>
				<motion.div
					variants={fadeIn('left', 0.4)}
					initial='hidden'
					animate='show'
					className='xl:w-[40%]'
				>
					<div className='flex justify-center xl:justify-start gap-x-4 xl:gap-x-8 xl:mx-0 mb-4'>
						{aboutData.map((item, itemIndex) => {
							return (
								<div
									key={itemIndex}
									className={`${
										index === itemIndex &&
										'text-accent after:w-[100%] after:bg-accent '
									} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300`}
									onClick={() => setIndex(itemIndex)}
								>
									{item.title}
								</div>
							)
						})}
					</div>
					<div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
						{aboutData[index].info.map((item, itemIndex) => {
							return (
								<div className='flex items-center'>
									<div
										key={itemIndex}
										className='flex-1 flex flex-col md:flex-row gap-x-2 items-center text-white/60 w-[125px]'
									>
										<div className='flex gap-x-4'>
											{item.icons?.map((icon, itemIndex) => {
												return (
													<>
														<div className='text-2xl text-white transition-colors hover:text-accent duration-300 cursor-pointer'>
															{icon}
														</div>
													</>
												)
											})}
										</div>
										<div className=' mb-2 md:mb-0'>{item.title}</div>
										<div className='hidden md:flex'>-</div>
										<div>{item.stage}</div>
									</div>
									<div className='w-[200px] h-3 border border-accent rounded-full overflow-hidden'>
										<div
											className={`h-full bg-accent relative overflow-hidden rounded-full animate-pulse`}
											style={{ width: `${item.progress}` }}
										>
											<div className='absolute -left-[10px] top-0 h-full w-[10px] bg-site animate-movement rounded-full'></div>
											<div className='absolute left-[10px] top-0 h-full w-[10px] bg-site animate-movement rounded-full'></div>
											<div className='absolute left-[30px] top-0 h-full w-[10px] bg-site animate-movement rounded-full'></div>
											<div className='absolute left-[50px] top-0 h-full w-[10px] bg-site animate-movement rounded-full'></div>
											<div className='absolute left-[70px] top-0 h-full w-[10px] bg-site animate-movement rounded-full'></div>
											<div className='absolute left-[90px] top-0 h-full w-[10px] bg-site animate-movement rounded-full'></div>
											<div className='absolute left-[110px] top-0 h-full w-[10px] bg-site animate-movement rounded-full'></div>
											<div className='absolute left-[130px] top-0 h-full w-[10px] bg-site animate-movement rounded-full'></div>
											<div className='absolute left-[150px] top-0 h-full w-[10px] bg-site animate-movement rounded-full'></div>
											<div className='absolute left-[170px] top-0 h-full w-[10px] bg-site animate-movement rounded-full'></div>
											<div className='absolute left-[190px] top-0 h-full w-[10px] bg-site animate-movement rounded-full'></div>
											{/* <div className='h-[120%] w-[30px] bg-white rotate-45 '></div> */}
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default About
