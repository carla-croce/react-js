const Item = ({ name, img, price }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} style={{width: 100}}/>
            <h3>{price}</h3>
            <button>Detalle</button>
        </div>
    )
}

export default Item