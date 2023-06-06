import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
// import './index.css'
import { RiArrowDownSLine } from 'react-icons/ri'
import Sidebar from './components/shared/Sidebar'
import Car from './components/shared/Car'
import Header from './components/shared/Header'
import Content from './components/shared/Content'
import fakedatabase from './fakedatabase'
import fakedatabase2 from './fakedatabase2'

function App() {
	const [showMenu, setShowMenu] = useState(false)
	const [showOrder, setShowOrder] = useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
		setShowOrder(false)
	}

	const toggleOrders = () => {
		setShowOrder(!showOrder)
		setShowMenu(false)
	}

	return (
		<>
			<HashRouter>
				<div className='bg-[#262837] w-full min-h-screen'>
					<Sidebar showMenu={showMenu} />
					<Car showOrder={showOrder} setShowOrder={setShowOrder} />
					{/* Menu Mobile */}
					<main className='lg:pl-32 lg:pr-96 pb-20'>
						{/* Main Content */}
						<div className='md:p-8 p-4'>
							{/* Header */}
							<Header />
							{/* Title Content */}
							<div className='flex items-center justify-between mb-10'>
								<h2 className='text-xl text-gray-300'>Show Dishes</h2>
								<button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
									<RiArrowDownSLine />
									Dine in
								</button>
							</div>
							<Routes>
								{/* Content */}
								<Route path='/' element={<Content fakedatabase={fakedatabase} />} />
								<Route path='/grill' element={<Content fakedatabase={fakedatabase2} />} />
							</Routes>
						</div>
					</main>
				</div>
			</HashRouter>
		</>
	)
}

export default App
