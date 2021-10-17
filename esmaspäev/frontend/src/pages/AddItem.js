import AddItemForm from '../components/AddItemForm'

function AddItem() {
  function itemSubmitHandler(item) {
    fetch('http://localhost:8080/items',{
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type':'application/json'
      }
    });
  }

  return (
    <div>
      <br/><br/><br />
      <div className = {"AddNewItem"}>
      <h1>New Item</h1>
      <hr/>
      <br/>
      <AddItemForm onAddItem={itemSubmitHandler}/>
      </div>
    </div>
    );
}

export default AddItem;