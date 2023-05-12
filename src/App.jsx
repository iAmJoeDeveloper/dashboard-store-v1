import { useState } from 'react'
// import './index.css'
import {
	RiMenu2Fill,
	RiUser3Line,
	RiAddLine,
	RiPieChart2Line,
	RiCloseLine,
	RiSearch2Line,
	RiArrowDownSLine,
} from 'react-icons/ri'
import Sidebar from './components/shared/Sidebar'

function App() {
	const [showMenu, setShowMenu] = useState(false)
	const [showOrder, setShowOrder] = useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
		<>
			<div className='bg-[#262837] w-full min-h-screen'>
				<Sidebar showMenu={showMenu} />
				{/* Menu Mobile */}
				<nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
					<button className='p-2'>
						<RiUser3Line />
					</button>
					<button className='p-2'>
						<RiAddLine />
					</button>
					<button className='p-2'>
						<RiPieChart2Line />
					</button>
					<button onClick={toggleMenu} className='text-white bg-red-400 p-2'>
						{showMenu ? <RiCloseLine /> : <RiMenu2Fill />}
					</button>
				</nav>
				<main className='lg:pl-32 grid grids-cols-1 lg:grid-cols-8 p-4 pb-20'>
					{/* Main Content */}
					<div className='lg:col-span-6 md:p-8'>
						{/* Header */}
						<header>
							{/* Title and Search */}
							<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6'>
								<div>
									<h1 className='text-2xl text-gray-300'>Jaegar Resto</h1>
									<p className='text-gray-500'>07 October 2023</p>
								</div>
								<form>
									<div className='w-full relative'>
										<RiSearch2Line className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' />
										<input
											type='text'
											className='bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none'
											placeholder='Search...'
										/>
									</div>
								</form>
							</div>
							{/* Tabs */}
							<nav className='text-gray-300 flex items-center justify-between lg:justify-start lg:gap-8 border-b mb-6'>
								<a
									href='#'
									className='relative py-2 pr-4 before:w-1/2 before:h-[1px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]'
								>
									Hot Dishes
								</a>
								<a href='#' className='py-2 pr-4 '>
									Cold Dishes
								</a>
								<a href='#' className='py-2 pr-4'>
									Soup
								</a>
								<a href='#' className='py-2 pr-4'>
									Grill
								</a>
							</nav>
						</header>
						{/* Title Content */}
						<div className='flex items-center justify-between mb-10'>
							<h2 className='text-xl text-gray-300'>Show Dishes</h2>
							<button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
								<RiArrowDownSLine />
								Dine in
							</button>
						</div>
						{/* Content */}
						<div className='p-8 grid md:grid-cols-2 lg:grid-cols-3 grid-col-1 gap-16'>
							{/* Card */}
							<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
								<img
									src='img/Pizza-1.png'
									alt='Pizza'
									className='h-40 w-40 object-cover -mt-20 shadow-2xl rounded-full'
								/>
								<p className='text-xl'>Speacy seasoned seafood noodles</p>
								<span className='text-gray-400'>$2.29</span>
								<p className='text-gray-600'>20 Bowls available</p>
							</div>
							{/* Card */}
							<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
								<img
									src='img/Pizza-1.png'
									alt='Pizza'
									className='h-40 w-40 object-cover -mt-20 shadow-2xl rounded-full'
								/>
								<p className='text-xl'>Speacy seasoned seafood noodles</p>
								<span className='text-gray-400'>$2.29</span>
								<p className='text-gray-600'>20 Bowls available</p>
							</div>
							{/* Card */}
							<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
								<img
									src='img/Pizza-1.png'
									alt='Pizza'
									className='h-40 w-40 object-cover -mt-20 shadow-2xl rounded-full'
								/>
								<p className='text-xl'>Speacy seasoned seafood noodles</p>
								<span className='text-gray-400'>$2.29</span>
								<p className='text-gray-600'>20 Bowls available</p>
							</div>
							{/* Card */}
							<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
								<img
									src='img/Pizza-1.png'
									alt='Pizza'
									className='h-40 w-40 object-cover -mt-20 shadow-2xl rounded-full'
								/>
								<p className='text-xl'>Speacy seasoned seafood noodles</p>
								<span className='text-gray-400'>$2.29</span>
								<p className='text-gray-600'>20 Bowls available</p>
							</div>
							{/* Card */}
							<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
								<img
									src='img/Pizza-1.png'
									alt='Pizza'
									className='h-40 w-40 object-cover -mt-20 shadow-2xl rounded-full'
								/>
								<p className='text-xl'>Speacy seasoned seafood noodles</p>
								<span className='text-gray-400'>$2.29</span>
								<p className='text-gray-600'>20 Bowls available</p>
							</div>
							{/* Card */}
							<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
								<img
									src='img/Pizza-1.png'
									alt='Pizza'
									className='h-40 w-40 object-cover -mt-20 shadow-2xl rounded-full'
								/>
								<p className='text-xl'>Speacy seasoned seafood noodles</p>
								<span className='text-gray-400'>$2.29</span>
								<p className='text-gray-600'>20 Bowls available</p>
							</div>
						</div>
					</div>
					{/* Orders / Carrito */}
					<div className='lg:col-span-2 fixed lg:static top-0 right-0 bg-[#1F1D2B] w-full h-full'>
						<div className='relative pt-16 text-gray-300 p-8'>
							<RiCloseLine className='absolute left-4 top-4 p-3 box-content text-gray-300 text-xl bg-[#262837] rounded-full' />
							<h1 className='text-2xl my-4'>Order #1276</h1>
							<div className='flex items-center gap-4 flex-wrap'>
								<button className='bg-[#ec7c6a] text-white py-2 px-4 rounded-xl'>Dine In</button>
								<button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>
									To Go
								</button>
								<button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>
									Delivery
								</button>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default App
