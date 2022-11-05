import Content from '../Content';
import Form from '../Form';

const Main = ({items, handleDeleteItem, handleChangeCheckedItem, setItems}) => {
	
	return (
		<main>
			<Form setItems={setItems} items={items}></Form>
			<Content items={items} handleChangeCheckedItem={handleChangeCheckedItem} handleDeleteItem={handleDeleteItem}></Content>
		</main>
	)
}

export default Main;