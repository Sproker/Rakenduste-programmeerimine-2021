import { useState, useEffect } from 'react';
import Item from '../components/Item';

function SingleItem() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const itemId = window.location.href.split("/item/")[1];
    fetch('http://localhost:8080/view-item/' + itemId).then(res => {
      return res.json();
    }).then(data => {
      setItem(data);
    })
  }, [])

  if (!item) {
    return (<div>Loading...</div>);
  }

  return(
    <div>
      <Item 
        id={item.id}
        name={item.name}
        price={item.price}
        category={item.category}
        isAddToCart={true}
        isSingleItemView={true}
      />
    </div>
  )
}

export default SingleItem;