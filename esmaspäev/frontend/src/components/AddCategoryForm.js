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
    }

    return (
      <form onSubmit={formSubmitHandler}>
      <label>Kategooria nimi:</label> <br/>
      <input type="text" placeholder="Nimi" required ref={nameRef} /><br/><br/>
      <label htmlFor="type">Kategooria tüüp</label><br/>
      <select id="type" required ref={typeRef}>
      <option value="BASIC" default>Basic</option>
      <option value="DELUXE">Deluxe</option>
      <option value="PREMIUM">Premium</option>
      </select><br/><br/>
      <button>Lisa Kategooria</button>
  </form>
    )
}

export default AddCategoryForm