import { useState } from 'react'
// import './index.css'
import { RiArrowDownSLine } from 'react-icons/ri'
import Sidebar from './components/shared/Sidebar'
import Car from './components/shared/Car'
import Header from './components/shared/Header'
import Card from './components/shared/Card'

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
						{/* Content */}
						<div className='p-8 grid md:grid-cols-2 lg:grid-cols-3 grid-col-1 gap-16'>
							{/* Card */}
							<Card
								img={'img/Pizza-1.png'}
								description={'Clasic Margarita'}
								price={'$2.50'}
								inventory={'22'}
							/>
							{/* Card */}
							<Card
								img={'img/Pizza-2.webp'}
								description={'Big Cheese Ham'}
								price={'$2.50'}
								inventory={'22'}
							/>
							{/* Card */}
							<Card
								img={'img/Pizza-3.webp'}
								description={'Mushroom Special'}
								price={'$2.50'}
								inventory={'22'}
							/>
							{/* Card */}
							<Card
								img={'img/Pizza-2.webp'}
								description={'Big Cheese Ham'}
								price={'$2.50'}
								inventory={'22'}
							/>
							{/* Card */}
							<Card
								img={'img/Pizza-3.webp'}
								description={'Mushroom Special'}
								price={'$2.50'}
								inventory={'22'}
							/>
							{/* Card */}
							<Card
								img={'img/Pizza-2.webp'}
								description={'Big Cheese Ham'}
								price={'$2.50'}
								inventory={'22'}
							/>
							{/* Card */}
							<Card
								img={'img/Pizza-3.webp'}
								description={'Mushroom Special'}
								price={'$2.50'}
								inventory={'22'}
							/>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default App
