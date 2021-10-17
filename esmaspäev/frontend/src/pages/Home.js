import ItemList from '../components/ItemList';
import './Pages.css';
import {useState, useEffect} from 'react';

function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setloadedItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setloadedItems(data);
        });
    }, [])

    if (isLoading) {
        return (
            <div>Page is loading</div>
        )
    }

    return (
        <div>
            <br/><br/><br />
            <div className={"AddedItems"}>
            <h1>Added Item list</h1>
            <hr />
            <br />
            <ItemList items={loadedItems}/>
            </div>
            <br />
        </div>
    );
}

export default Home;