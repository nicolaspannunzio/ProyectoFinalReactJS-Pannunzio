const products = [
    {id: "1",   name: "Flip5 Cream",            category: "Z",     price: 724,     description: "smartphone",  img: "/img/Flip5Cream.webp", stock: 5 },
    {id: "2",   name: "Fold4 Phantom Black",    category: "Z",     price: 972,     description: "smartphone",  img: "/img/Fold4PhantomBlack.png", stock: 3 },
    {id: "3",   name: "S22 Green",              category: "S",     price: 458,     description: "smartphone",  img: "/img/S22Green.jpg", stock: 8 },
    {id: "4",   name: "S23 Cream",              category: "S",     price: 620,     description: "smartphone",  img: "/img/S23Cream.jpg", stock: 7 },
    {id: "5",   name: "A14 Black",              category: "A",     price: 136,     description: "smartphone",  img: "/img/A14Black.png", stock: 2 },
    {id: "6",   name: "A23",                    category: "A",     price: 209,     description: "smartphone",  img: "/img/A23.jpg", stock: 6 },
]

export const getProducts = () => { 
    return new Promise ((resolve, reject) => {
        
        if (products.length > 0){
           setTimeout (() => {
            resolve (products)
            }, 1500); 
        } else {
            reject ("Producto no encontrado");
        }
    });
}

export const getProductById = (id) => {
  return new Promise ((resolve, reject) => {

    if (products.length > 0) {
        const product = products.find (p => p.id === id);

        setTimeout (() => {
            if(!product){
                reject(`Producto no encontrado ${id}`)
            } 
            resolve(product);
        }, 1500);
    } else {
            reject ("No hay productos");
    }
    });
};