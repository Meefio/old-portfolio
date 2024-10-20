import React from 'react'

//components
import Image from 'next/image'
import {FaFigma } from 'react-icons/fa'
import {BsArrowRight } from 'react-icons/bs'
import { SiWebflow } from 'react-icons/si'

const WorkCardLeft = ({projectName, subtitle, description}) => {
	return (
		<div className='portfolio-element mt-20 '>
			<div className='flex flex-col xl:flex-row justify-between gap-x-6'>
				<div className='xl:w-1/2  flex flex-col justify-center text-center xl:text-left '>
					<h4 className='font-thin text-white/40 uppercase tracking-[10px]'>Latest work</h4>
					<h3 className='text-3xl mt-6 mb-2'>{projectName} </h3>
					<h3 className='text-white/80'>{subtitle}</h3>
					<p className='max-w-[480px] py-4 text-xl leading-12 mx-auto xl:mx-0'>
						{description}
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
	)
}

export default WorkCardLeft
