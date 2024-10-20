//components
import WorkSlider from '../../components/WorkSlider'
import Circles from '../../components/Circles'
import Image from 'next/image'
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaGit } from 'react-icons/fa'
import { LuMonitorSmartphone, LuMessagesSquare } from 'react-icons/lu'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { BsFiletypeScss, BsArrowRight } from 'react-icons/bs'
import { SiNextdotjs, SiFramer, SiWebflow } from 'react-icons/si'
import WorkCardLeft from '../../components/WorkCardLeft'

//framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Work = () => {
	return (
		<div id='portfolio' className='bg-primary/15 flex py-36 items-center'>
			<Circles />
			<div className='container mx-auto'>
				<div className='flex flex-col gap-x-8'>
					<div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='h2 xl:mt-12'>
							My work<span className='text-accent'> .</span>
						</motion.h2>
						<motion.p
							variants={fadeIn('up', 0.4)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
							Take a look at my recent work
						</motion.p>
					</div>
					{/* <motion.div
						variants={fadeIn('down', 0.6)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='w-full xl:max-w-[65%]'>
						<WorkSlider />
					</motion.div> */}
					<WorkCardLeft
						projectName='Chat App'
						subtitle='Website'
						description='This is a homepage design and build for a concept project – a chat application. I designed the page first then built a responsive web page using Webflow.'
						icon=''
					/>
					<div className='portfolio-element mt-20 '>
						<div className='flex flex-col xl:flex-row justify-between gap-x-6'>
							<div className='xl:w-1/2  flex flex-col justify-center text-center xl:text-left '>
								<h4 className='font-thin text-white/40 uppercase tracking-[10px]'>Latest work</h4>
								<h3 className='text-3xl mt-6 mb-2'>Chat App </h3>
								<h3 className='text-white/80'>Website</h3>
								<p className='max-w-[480px] py-4 text-xl leading-12 mx-auto xl:mx-0'>
									This is a homepage design and build for a concept project – a chat application. I designed the page
									first then built a responsive web page using Webflow.
								</p>
								<p className='text-white/80'>Used Technology:</p>
								<div className='flex space-x-3 text-2xl text-white my-2 justify-center mb-10 xl:mb-0 xl:justify-start'>
									<FaFigma className='transition-colors hover:text-accent duration-300 cursor-pointer' />
									<SiWebflow className='transition-colors hover:text-accent duration-300 cursor-pointer' />
								</div>
							</div>
							<div className='xl:w-1/2 mx-auto max-w-[500px] relative group overflow-hidden cursor-pointer xl:mx-0'>
								<Image
									src={'/Chat-App-min.jpg'}
									width={523}
									height={446}
									alt=''
									className='group-hover:scale-105 transition-transform duration-1000 mx-auto'
								/>
								<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
									<div className='absolute flex inset-0 items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]'>
										<div className='delay-100'>LIVE</div>
										<div className='translate-y-[500%] group-hover:translate-y-0 transition-transform duration-300 delay-150'>
											PROJECT
										</div>
										<div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
											<BsArrowRight />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='portfolio-element mt-20 xl:mt-40'>
						<div className='flex flex-col xl:flex-row justify-between gap-x-6'>
							<div className='xl:w-1/2  flex flex-col justify-center text-center xl:text-left xl:order-2 xl:items-end'>
								<h4 className='font-thin text-white/40 uppercase tracking-[10px]'>Latest work</h4>
								<h3 className='text-3xl mt-6 mb-2'>Team App </h3>
								<h3 className='text-white/80'>Website</h3>
								<p className='max-w-[480px] py-4 text-xl leading-12 mx-auto xl:mx-0 xl:text-right'>
									Full website design and build for a concept team collaboration platform. This website also includes a
									beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for
									blog hosting.
								</p>
								<p className='text-white/80'>Used Technology:</p>
								<div className='flex space-x-3 text-2xl text-white my-2 justify-center mb-10 xl:mb-0 xl:justify-start'>
									<FaFigma className='transition-colors hover:text-accent duration-300 cursor-pointer' />
									<SiWebflow className='transition-colors hover:text-accent duration-300 cursor-pointer' />
								</div>
							</div>
							<div className='xl:w-1/2 mx-auto max-w-[500px] relative group overflow-hidden cursor-pointer xl:mx-0 xl:order-1'>
								<Image
									src={'/Team-min.jpg'}
									width={523}
									height={446}
									alt=''
									className='group-hover:scale-105 transition-transform duration-1000 mx-auto'
								/>
								<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
									<div className='absolute flex inset-0 items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]'>
										<div className='delay-100'>LIVE</div>
										<div className='translate-y-[500%] group-hover:translate-y-0 transition-transform duration-300 delay-150'>
											PROJECT
										</div>
										<div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
											<BsArrowRight />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='portfolio-element mt-20 xl:mt-40'>
						<div className='flex flex-col xl:flex-row justify-between gap-x-6'>
							<div className='xl:w-1/2  flex flex-col justify-center text-center xl:text-left '>
								<h4 className='font-thin text-white/40 uppercase tracking-[10px]'>Latest work</h4>
								<h3 className='text-3xl mt-6 mb-2'>Team App </h3>
								<h3 className='text-white/80'>Website</h3>
								<p className='max-w-[480px] py-4 text-xl leading-12 mx-auto xl:mx-0'>
									Full website design and build for a concept team collaboration platform. This website also includes a
									beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for
									blog hosting.
								</p>
								<p className='text-white/80'>Used Technology:</p>
								<div className='flex space-x-3 text-2xl text-white my-2 justify-center mb-10 xl:mb-0 xl:justify-start'>
									<FaFigma className='transition-colors hover:text-accent duration-300 cursor-pointer' />
									<SiWebflow className='transition-colors hover:text-accent duration-300 cursor-pointer' />
								</div>
							</div>
							<div className='xl:w-1/2 mx-auto max-w-[500px] relative group overflow-hidden cursor-pointer xl:mx-0'>
								<Image
									src={'/blog-min.jpg'}
									width={523}
									height={446}
									alt=''
									className='group-hover:scale-105 transition-transform duration-1000 mx-auto'
								/>
								<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
									<div className='absolute flex inset-0 items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]'>
										<div className='delay-100'>LIVE</div>
										<div className='translate-y-[500%] group-hover:translate-y-0 transition-transform duration-300 delay-150'>
											PROJECT
										</div>
										<div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
											<BsArrowRight />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work
