import { Sora } from '@next/font/google'
import About from '../pages/about/index'
import Services from '../pages/services/index'
import Contact from '../pages/contact/index'
import Work from '../pages/work/index'

const sora = Sora({
	subsets: ['latin'],
	variable: '--font-sora',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

//components

import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftIimg from '../components/TopLeftImg'

const Layout = ({ children }) => {
	return (
		<div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-scroll scroll-smooth`}>
			<TopLeftIimg />
			{/* <Nav /> */}
			<Header />
			{children}
			<About />
			<Services />
			<Work />
			<Contact />
		</div>
	)
}

export default Layout
