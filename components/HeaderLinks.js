import React, { useState } from 'react'
import Link from 'next/link'

const HeaderLinks = () => {
const [showMenu, setShowMenu] = useState(false)

	return (
		<div className='flex items-center gap-x-5 text-sm'>
			<Link href={'#home'} >
				<p className='text-white hover:text-accent transition-colors duration-300 font-poppins font-normal'>Home</p>
			</Link>
			<Link href={'#about'} >
				<p className='text-white hover:text-accent transition-colors duration-300 font-poppins font-normal'>About Me</p>
			</Link>
			<Link href={'#services'} >
				<p className='text-white hover:text-accent transition-colors duration-300 font-poppins font-normal'>My Services</p>
			</Link>
			<Link href={'#portfolio'} >
				<p className='text-white hover:text-accent transition-colors duration-300 font-poppins font-normal'>Portfolio</p>
			</Link>
			<Link href={'#contact'} >
				<button className='font-poppins border border-transparent bg-white/10 px-8 py-2 rounded-full text-acc text-white  hover:border-accent transition-color duration-300  '>Contact</button>
			</Link>
			
			<div className='absolute flex flex-col items-center h-screen -right-[300px] top-0 w-[300px] bg-black'>
			<Link href={'#home'} >
				<p className='mt-20 py-4 my-1  text-white hover:text-accent transition-colors duration-300 font-poppins font-normal'>Home</p>
			</Link>
			<Link href={'#about'} >
				<p className='py-4 my-1 text-white hover:text-accent transition-colors duration-300 font-poppins font-normal'>About Me</p>
			</Link>
			<Link href={'#services'} >
				<p className='py-4 my-1 text-white hover:text-accent transition-colors duration-300 font-poppins font-normal'>My Services</p>
			</Link>
			<Link href={'#portfolio'} >
				<p className='py-4 my-1 text-white hover:text-accent transition-colors duration-300 font-poppins font-normal'>Portfolio</p>
			</Link>
			<Link href={'#contact'} >
				<button className='font-poppins border border-transparent bg-white/10 px-8 py-2 rounded-full text-acc text-white  hover:border-accent transition-color duration-300 my-4 '>Contact</button>
			</Link>

			</div>
			
		</div>
	)
}

export default HeaderLinks
