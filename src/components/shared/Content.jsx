import Card from './Card'
import fakedatabase from '../../fakedatabase'

const Content = () => {
	const pizzas = fakedatabase.map((pizza) => (
		<Card
			key={pizza.id}
			img={pizza.img}
			description={pizza.description}
			price={pizza.price}
			inventory={pizza.inventory}
		/>
	))

	return (
		<div className='p-8 grid md:grid-cols-2 lg:grid-cols-3 grid-col-1 gap-16'>
			{/* Card */}
			{pizzas}
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
