const products = [
    {
        id: '1',
        name: 'Vela Magnolia',
        precio: 2000,
        img: 'https://dcdn.mitiendanube.com/stores/001/352/948/products/cuenco21-d854b6d79298fe0f4216543729266935-1024-1024.jpg',
        stock: 10,
        description: 'Vela de soja en cuenco de madera',
    },
    { id: '2', name: 'Vela Clementina', precio: 2500, img: 'https://d22fxaf9t8d39k.cloudfront.net/b40a8bb1bec01824320e6df616911f0b4b2b3d322935090adf48db25b83bc33c61770.png', stock: 10, description: 'Vela de soja con detalle floral'},
    { id: '3', name: 'Vela Margarita', precio: 3000, img: 'https://ae01.alicdn.com/kf/S00b580eb551541ba806ca56c0db59d09J/Velas-arom-ticas-de-cera-de-soja-para-decoraci-n-del-hogar-adornos-para-el-hogar.jpg', stock: 10, description: 'Vela con detalles geométricos'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 1000)  
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === id))
        }, 500)       
    })    
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)       
    })   
}