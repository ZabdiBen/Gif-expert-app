import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GiftApp = () => {
	
	const [categories, setCategories] = useState(['One push', 'dragon ball']);
	const onAddCategory = () => {
		//el push no sirve en react
		//categories.push('agregado')
		// ... hace una copia del objecto
		setCategories([...categories])
	}
	
	return (
		<div>
			{/*titulo*/}
			<h2> gift app </h2>
			
			{/*input*/}
			<AddCategory setCategories={ setCategories } />
			
			{/*listado de gif*/}
			{/* <button onClick={onAddCategory} >agregar</button> */}
			
			<ol>
				{
					categories.map( category => {
					    return <li key={category}	>	{category}	</li>
					    console.log('key', key)  	
					})
				}
			</ol>
			
			{/*gif item*/}
		</div>
		)
}