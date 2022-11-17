import Content from '../Content';
import Form from '../Form';

const Main = ({items, handleDeleteItem, handleChangeCheckedItem, setItems, inputValue, setInputValue, handleSubmit, inputShowing, setInputShowing, searchWord, setSearchWord, handleSearch, changeInput}) => {
	
	return (
		<main>
			<Form inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} inputShowing={inputShowing} setInputShowing={setInputShowing} searchWord={searchWord} setSearchWord={setSearchWord} changeInput={changeInput} handleSearch={handleSearch}></Form>
			<Content items={items} handleChangeCheckedItem={handleChangeCheckedItem} handleDeleteItem={handleDeleteItem} handleSearch={handleSearch} changeInput={changeInput}></Content>
		</main>
	)
}

export default Main;