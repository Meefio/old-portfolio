import Image from 'next/image'
import HeaderLinks from './HeaderLinks'
import Link from 'next/link'

import Socials from '../components/Socials'

const Header = () => {
	return (
		<header className='fixed z-30 w-full flex items-center px-16 xl:px-0  bg-black/30 overflow-hidden'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-0'>
					{/* logo */}
					<a href={'/'}>
						<h1 className='h1 text-2xl mb-0 py-3'>Michał <span className='font-thin text-2xl'>Rowiński</span><span className='text-red-600 text-2xl'>.</span></h1>
					</a>
					<HeaderLinks />
					{/* <Socials /> */}
				</div>
			</div>
		</header>
	)
}

export default Header
