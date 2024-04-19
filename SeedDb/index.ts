import seedProducts from "./ProductSeed";
import seedOrders from "./OrderSeed";
import userSeed from "./UserSeed";

async function seedDb () {
    await seedProducts();
    await seedOrders();
    await userSeed();
}

export default seedDb;