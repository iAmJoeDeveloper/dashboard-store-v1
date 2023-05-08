import { useState } from 'react'
// import './index.css'
import { RiMenu2Fill, RiUser3Line, RiAddLine, RiPieChart2Line, RiCloseLine } from 'react-icons/ri'
import Sidebar from './components/shared/Sidebar'

function App() {
	const [showMenu, setShowMenu] = useState(true)
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
			</div>
		</>
	)
}

export default App
