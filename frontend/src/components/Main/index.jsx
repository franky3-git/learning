import Content from '../Content';
import Form from '../Form';

const Main = ({items, handleDeleteItem, handleChangeCheckedItem, setItems, inputValue, setInputValue, handleSubmit}) => {
	
	return (
		<main>
			<Form inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit}></Form>
			<Content items={items} handleChangeCheckedItem={handleChangeCheckedItem} handleDeleteItem={handleDeleteItem}></Content>
		</main>
	)
}

export default Main;