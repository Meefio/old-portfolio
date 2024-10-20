import Image from 'next/image'

//components
import ParticleContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

//framer motion
import { motion } from 'framer-motion'

//variants

import { fadeIn } from '../variants'
import ParticlesContainer from '../components/ParticlesContainer'

const Home = () => {
	return (
		<div id='home' className='bg-primary/60 h-full'>
			{/* text */}
			<div className='h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 overflow-hidden'>
				<div className='h-full text-center flex flex-col justify-center  xl:pt-40 xl:text-left container mx-auto'>
					<motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1 z-10'>
						Hi there! I'm Michał,<br /> <span className='text-accent'>Frontend Developer</span>
					</motion.h1>

					<motion.p
						variants={fadeIn('down', 0.3)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 z-20 xl:text-xl text-white'>
						I design and build modern websites for businesses around the globe. If you need a powerful website, send me an email. If we are a good fit, I will give you a time and cost estimate.
					</motion.p>
					<div className='flex justify-center xl:hidden relative z-10'>
						<ProjectsBtn />
					</div>
					<motion.div
						variants={fadeIn('down', 0.4)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='hidden xl:flex z-10'>
						<ProjectsBtn />
					</motion.div>
				</div>
			</div>
			{/* image */}
			<div className='w-[1200px] max-h-[1850px] h-full absolute right-0 -bottom-12'>
				<div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge z-0 '></div>
				<ParticlesContainer />

				<motion.div
					variants={fadeIn('up', 0.5)}
					initial='hidden'
					animate='show'
					exit='hidden'
					transition={{ duration: 1, ease: 'easeInOut' }}
					className='h-full w-full max-w-[737px] max-h-[678px] absolute bottom-32 lg:bottom-[22rem] lg:right-[4%] pointer-events-none'>
					<Avatar />
				</motion.div>
			</div>
		</div>
	)
}

export default Home
