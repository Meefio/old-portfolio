import Circles from '../../components/Circles'
import { BsArrowRight } from 'react-icons/bs'
import { RxArrowTopRight } from 'react-icons/rx'
//framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Contact = () => {
	return (
		<div id='contact' className='h-full bg-primary/30 py-36 flex items-center'>
			<Circles />
			<div className='container mx-auto'>
				<motion.h2
					variants={fadeIn('up', 0.2)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='h2 xl:mt-12 text-center'>
					Let's<span className='text-accent'> connect.</span>
				</motion.h2>
				<motion.form
					variants={fadeIn('up', 0.4)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='max-w-[600px] mx-auto mt-10'>
					<div className='grid grid-cols-2 grid-rows-2 gap-4 '>
						<input
							type='text'
							placeholder='Name'
							className='col-span-1 p-3 bg-transparent border text-white/60 border-white/20 rounded-md focus:outline-none focus:border-white/40'
						/>
						<input
							type='email'
							placeholder='E-mail'
							className='col-span-1 p-3 bg-transparent border text-white/60 border-white/20 rounded-md focus:outline-none focus:border-white/40'
						/>
						<input
							type='text'
							placeholder='Subject'
							className='col-span-2 p-3 bg-transparent border text-white/60 border-white/20 rounded-md focus:outline-none focus:border-white/40'
						/>
					</div>
					<textarea
						placeholder='Message'
						className='w-full min-h-[200px] max-h-[400px] p-3 rounded-md resize-y  my-4 bg-transparent border text-white/60 border-white/20 focus:outline-none focus:border-white/40'
					/>
					<button className='flex items-center border border-white/20 rounded-full px-8 py-2 group hover:border-accent transition-colors duration-300'>
						<span className=' text-white/80'>Let's talk</span>
						<RxArrowTopRight className='ml-2 text-md group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
					</button>
				</motion.form>
			</div>
		</div>
	)
}

export default Contact
