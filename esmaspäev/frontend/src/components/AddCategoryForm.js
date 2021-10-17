import './AddCategoryForm.css';
import {useRef} from 'react'

function AddCategoryForm(props) {
    const nameRef = useRef()
    const typeRef = useRef()
    function formSubmitHandler(e) {
        e.preventDefault();
        const category = {
            name: nameRef.current.value,
            category: typeRef.current.value
        }
        props.onAddCategory(category)
        alert("Category successfuly added to the list!");
    }

    return (
      <form onSubmit={formSubmitHandler}>
      <label><b>Category name</b></label> <br/>
      <input type="text" placeholder="Name" required ref={nameRef}/><br/>
      <label htmlFor="type"><b>Category type</b></label><br/>
      <select id="type" required ref={typeRef}>
      <option value="BASIC" default>Basic</option>
      <option value="DELUXE">Deluxe</option>
      <option value="PREMIUM">Premium</option>
      </select><br/><br />
      <button><b>Add new Category</b></button>
  </form>
    )
}

export default AddCategoryForm