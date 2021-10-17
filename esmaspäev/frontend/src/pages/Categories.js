import { useState, useEffect } from 'react';



function Categories() {

    const [isLoading, setIsLoading] = useState(true)
    const [loadedCategories, setLoadedCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/categories').then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedCategories(data)
        });
    }, [])

    if (isLoading) {
        return (
            <div>Laeb..</div>
        )
    }

    return (
        <div>
        </div>
    )
}

export default Categories