function Item(props) {
  return (
    <div>
      <div className="itemName"><b>Name:</b> {props.name}</div>
      <div className="itemPrice"><b>Price:</b> {props.price}</div>
      <div className="itemCategory"><b>Category:</b> {props.category}</div>
      <br />
    </div>
  )
}

export default Item;