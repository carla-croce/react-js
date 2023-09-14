import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const[product, setProduct] = useState(null)
    useEffect(() => {
        getProductById('1')
        .then(res => {
            setProduct(res)
        })
        .catch(error => {
            console.error(error)
        })
    })

    return (
        <div>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer