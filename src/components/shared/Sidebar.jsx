import {
	RiHome6Line,
	RiPercentLine,
	RiPieChart2Line,
	RiMailLine,
	RiNotification2Line,
	RiSettings2Line,
	RiLogoutCircleLine,
} from 'react-icons/ri'

const Sidebar = () => {
	return (
		<div className='bg-[#1F1D2B] fixed  left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl'>
			<ul className='pl-4'>
				<li>
					<h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>Logo</h1>
				</li>
				<li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
					<a href='#' className='bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white'>
						<RiHome6Line className='text-2xl' />
					</a>
				</li>
				<li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
					<a
						href='#'
						className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'
					>
						<RiPercentLine className='text-2xl' />
					</a>
				</li>
				<li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
					<a
						href='#'
						className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'
					>
						<RiPieChart2Line className='text-2xl' />
					</a>
				</li>
				<li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
					<a
						href='#'
						className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'
					>
						<RiMailLine className='text-2xl' />
					</a>
				</li>
				<li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
					<a
						href='#'
						className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'
					>
						<RiNotification2Line className='text-2xl' />
					</a>
				</li>
				<li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
					<a
						href='#'
						className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'
					>
						<RiSettings2Line className='text-2xl' />
					</a>
				</li>
			</ul>
			<ul className='pl-4'>
				<li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
					<a
						href='#'
						className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'
					>
						<RiLogoutCircleLine className='text-2xl' />
					</a>
				</li>
			</ul>
		</div>
	)
}
export default Sidebar
