import { useState } from 'react'
// import './index.css'
import {
	RiMenu2Fill,
	RiUser3Line,
	RiAddLine,
	RiPieChart2Line,
	RiCloseLine,
	RiSearch2Line,
} from 'react-icons/ri'
import Sidebar from './components/shared/Sidebar'

function App() {
	const [showMenu, setShowMenu] = useState(false)
	const [showOrder, setShowOrder] = useState(false)

	const toggleMenu = () => {
		setShowMenu(showMenu)
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
				<main className='lg:pl-28 grid grids-cols-1 lg:grid-cols-8'>
					<div className='lg:col-span-6'>
						<header className='p-4'>
							<div className='flex flex-col gap-4'>
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
										/>
									</div>
								</form>
							</div>
						</header>
					</div>
					<div className='lg:col-span-2 fixed lg:static right-0'>Carrito</div>
				</main>
			</div>
		</>
	)
}

export default App
