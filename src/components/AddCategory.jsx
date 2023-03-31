import { useState } from 'react'

export const AddCategory = ({ setCategories }) => {
	
	const [inputValue, setInputValue] = useState('one push');
	
	const onInputChange = ({target}) => {
		console.log(target.value)
		setInputValue(target.value)
	}
	const onSubmit = (e) => {
		e.preventDefault()
		console.log('inputValue', inputValue)
		if( inputValue.trim().length <= 1 ) return
		
		setCategories(	categories =>	[inputValue, ...categories]	)
		setInputValue('')
	}
	
	return (
		<form onSubmit={ onSubmit } >
			<input
			type="text"
			placeholder="Buscar gif"
			value={inputValue}
			onChange={ onInputChange }
			/>
		</form>
		)
}