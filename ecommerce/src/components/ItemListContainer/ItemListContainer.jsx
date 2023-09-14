import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(result => {
            console.log(result)
            setProducts(result)
        })
        .catch(error => {
            console.error(error)
        })
      }, [])

    console.log(products)
    const productsComponents = products.map(product =>{
        return (
            <div key={product.id}>
                <h3>{product.name}</h3>
            </div>
        )
    })
    console.log(productsComponents)
    return(
        <div>
            <h1>{greeting}</h1>
            {productsComponents}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer