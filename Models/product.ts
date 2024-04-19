import { Document, model, Schema } from "mongoose";

interface IProduct extends Document {
    name: string;
    stock: number;
    price: number;
    description: string;
}

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    stock: {type: Number, required: true},
    price: {type: Number, required: true},
    description: { type: String, required: true },
});

const Product = model<IProduct>('Product', productSchema);

export { Product, IProduct, productSchema };