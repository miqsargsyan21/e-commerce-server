import { model, Schema, Document } from "mongoose";

interface IProduct {
    product: Schema.Types.ObjectId;
    quantity: number;
}

interface IOrder extends Document {
    products: IProduct[];
    totalPrice: number;
}

const productSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
});

const orderSchema = new Schema<IOrder>({
    totalPrice: {type: Number, required: true},
    products: [productSchema],
});

const Order = model<IOrder>('Order', orderSchema);

export { Order, IOrder, IProduct, orderSchema };