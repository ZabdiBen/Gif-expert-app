import {useState} from 'react'

export const GiftApp = () => {
	
	const [categories, setCategories] = useState(['One push', 'dragon ball']);
	
	const onAddCategory = () => {
		//el push no sirve en react
		//categories.push('agregado')
		// ... hace una copia del objecto
		setCategories([...categories, 'holaa'])
	}
	
	return (
		<div>
			{/*titulo*/}
		
			<h2> gift app </h2>
			
			{/*input*/}
			
			{/*listado de gif*/}
			<button onClick={onAddCategory} >agregar</button>
			<ol>
			{
				categories.map( category => {
				    return <li key={category}	>	{category}	</li>
				})
				}
				</ol>
			
			{/*gif item*/}
		</div>
		)
}