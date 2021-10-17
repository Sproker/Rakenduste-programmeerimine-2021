import AddCategoryForm from '../components/AddCategoryForm'

function AddCategory(category) {

    function categorySubmitHandler(category) {
        fetch('http://localhost:8080/categories',
        {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {'Content-Type':'application/json'}
            
        });
        console.log("Post tehtud");
    }

    return (
        <div>
            <br/><br/><br />
            <div className = {"AddNewCategory"}>
            <h1>New Category</h1>
            <hr/>
            <br/>
            <AddCategoryForm onAddCategory={categorySubmitHandler}/>
            </div>
        </div>
    )
}

export default AddCategory