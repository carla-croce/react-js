import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, price, img, stock, description }) => {

    const handleOnAdd = (quantity) => {
        console.log('se agregó' + quantity)
    }

    return (
        <div>
            <h1>{name}</h1>
            <img src={img} style={{width: 500}}/>
            <h3>{price}</h3>
            <h3>{description}</h3>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail