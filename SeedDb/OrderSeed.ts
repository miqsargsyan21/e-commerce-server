import { IProduct, Product } from "../Models/product";
import { Order } from "../Models/order";

async function seedOrders () {
    await Order.deleteMany({});

    const products = await Product.find();

    let totalPrice = 0;

    const modifiedProducts = products.map((product: IProduct) => {
        totalPrice += product.price;

        return ({
            product,
            quantity: 1,
        });
    })

    const newOrder = new Order({
        totalPrice,
        products: modifiedProducts,
    });

    await newOrder.save();
}

export default seedOrders;