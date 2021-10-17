import './AddItemForm.css';
import { useRef } from 'react';

function AddItemForm(props) {
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();
  function formSubmitHandler(e) {
    e.preventDefault();
    const nameValue = nameInputRef.current.value;
    const priceValue = priceInputRef.current.value;
    const categoryValue = categoryInputRef.current.value;
    const item = {
      name: nameValue,
      price: priceValue,
      category: categoryValue
    }
    props.onAddItem(item);
    alert("Item " + nameValue + " added to the list!");
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <label><b>Item name</b></label><br />
      <input type="text" placeholder="Name" required ref={nameInputRef} /><br />
      <label><b>Item price</b></label><br />
      <input type="number" placeholder="Price"required ref={priceInputRef} /><br />
      <label><b>Item category</b></label><br />
      <input type="text"placeholder="Category" required ref={categoryInputRef} /><br /><br />
      <button><b>Add new item</b></button>
    </form>
  );
}

export default AddItemForm;