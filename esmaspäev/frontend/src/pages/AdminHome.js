import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';

function AdminHome() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedItems(data);
        });
    }, [])

    function makeDeleteRequest(itemId) {
      fetch('http://localhost:8080/delete-item/' + itemId, 
          { method: 'DELETE' }
        ).then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedItems(data);
        });
    }

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div>
        <br/><br/><br />
        <div className = {"AddNewItem"}>
        <h1>Admin view</h1>
        <hr/>
        <ItemList items={loadedItems} isAddToCart={false} onDeleteItem={makeDeleteRequest} />
        <hr/>
        <Link to="/add-item">
        <button><b>Add new</b></button>
        </Link>
        </div>
      </div>
    )
}

export default AdminHome;