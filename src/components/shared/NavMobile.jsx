import { RiMenu2Fill, RiUser3Line, RiAddLine, RiPieChart2Line, RiCloseLine } from 'react-icons/ri'

const NavMobile = () => {
	return (
		<nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
			<button className='p-2'>
				<RiUser3Line />
			</button>
			<button className='p-2'>
				<RiAddLine />
			</button>
			<button onClick={toggleOrders} className='p-2'>
				<RiPieChart2Line />
			</button>
			<button onClick={toggleMenu} className='text-white bg-red-400 p-2'>
				{showMenu ? <RiCloseLine /> : <RiMenu2Fill />}
			</button>
		</nav>
	)
}

export default NavMobile
