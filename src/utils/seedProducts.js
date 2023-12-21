import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
    {name: "Flip5 Cream",            category: "Z",     price: 724,     description: "smartphone",  img: "https://imgur.com/V46k412",   stock: 10 },
    {name: "Fold4 Phantom Black",    category: "Z",     price: 972,     description: "smartphone",  img: "https://imgur.com/nhmwRZM",   stock: 10 },
    {name: "S22 Green",              category: "S",     price: 458,     description: "smartphone",  img: "https://imgur.com/CFEyHSt",   stock: 10 },
    {name: "S23 Cream",              category: "S",     price: 620,     description: "smartphone",  img: "https://imgur.com/TTcQk0q",   stock: 10 },
    {name: "A14 Black",              category: "A",     price: 136,     description: "smartphone",  img: "https://imgur.com/HUvkjFW",   stock: 10 },
    {name: "A23",                    category: "A",     price: 209,     description: "smartphone",  img: "https://imgur.com/jmwyLhC",   stock: 10 },
]

export const seedProducts = () => {
    products.forEach( (product) => {
        addDoc (collection(db, "products"), product);
    });
};