import {useEffect, useState} from "react"

function useFetchProducts() {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/products`)
            .then(response => response.json())
            .then(setProductsList)
    }, [setProductsList])

    
    return productsList
}

export default useFetchProducts