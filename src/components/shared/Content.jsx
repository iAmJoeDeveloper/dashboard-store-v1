import Card from './Card'

const Content = (props) => {
	const { fakedatabase } = props

	const data = fakedatabase.map((product) => (
		<Card
			key={product.id}
			img={product.img}
			description={product.description}
			price={product.price}
			inventory={product.inventory}
		/>
	))

	return (
		<div className='p-8 grid md:grid-cols-2 lg:grid-cols-3 grid-col-1 gap-16'>
			{/* Card */}
			{data}
			{/* <Card
				img={'img/Pizza-3.webp'}
				description={'Mushroom Special'}
				price={'$2.50'}
				inventory={'22'}
			/> */}
		</div>
	)
}

export default Content
