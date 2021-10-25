import { Link } from "react-router-dom";
import '../pages/Pages.css';

function Item(props){
    function handleDelete(itemId){
      props.deleteItem(itemId);
      alert("Item successfuly deleted");
    }

    function alertUser(){
      alert("Feature unfinished!");
    }


    return (
      <div>
        {props.isSingleItemView ? 
          <div className={"AddedItems"}>
            <div className="itemName"><b>Name: </b>{props.name}</div>
            <div className="itemPrice"><b>Price: </b>{props.price} €</div>
            <div className="itemCategory"><b>Category: </b>{props.category}</div>
          </div> :
          <Link to={`item/${props.id}`}>
            <div className="itemName"><b>Name: </b>{props.name}</div>
            <div className="itemPrice"><b>Price: </b>{props.price} €</div>
            <div className="itemCategory"><b>Category: </b>{props.category}</div>
          </Link>}
          { props.isAddToCart ? <div className={"SingleButton"}>
            <button onClick={()=>alertUser()}>Add to cart</button></div> : 
            <div>
            <button onClick={()=>handleDelete(props.id)}><b>Delete</b></button>
            <Link to={`edit-item/${props.id}`}>
            <button><b>Edit</b></button>
            </Link>
            <br/><br/>
          </div> }
      </div>
    )
}

export default Item;