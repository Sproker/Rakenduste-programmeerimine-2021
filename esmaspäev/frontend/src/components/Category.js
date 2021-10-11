function Category(props) {
    return (
      <div>
        <div className="categoryName">{props.name}</div>
        <div className="categoryType">{props.category}</div>
      </div>
    )
  }
  
  export default Category;