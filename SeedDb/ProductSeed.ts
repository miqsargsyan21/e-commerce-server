import { IProduct, Product } from "../Models/product";

async function seedProducts () {
    const products: Partial<IProduct>[] = [
        {
            name: "Laptop",
            stock: 10,
            price: 999.99,
            description: "Powerful laptop for all your computing needs."
        },
        {
            name: "Smartphone",
            stock: 20,
            price: 699.99,
            description: "High-end smartphone with advanced features."
        },
        {
            name: "Headphones",
            stock: 30,
            price: 149.99,
            description: "Noise-canceling headphones for immersive audio experience."
        }
    ];

    await Product.deleteMany({});
    await Product.insertMany(products);
}

export default seedProducts;