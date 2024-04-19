import { Document, model, Schema } from "mongoose";
import { IOrder } from "./order";

interface IUser extends Document {
    orders: IOrder[];
    username: string;
    password: string;
    isAdmin: boolean;
}

const userSchema: Schema = new Schema<IUser>({
    orders: [{type: Schema.Types.ObjectId, ref: 'Order'}],
    username: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
});

const User = model<IUser>('User', userSchema);

export { User, IUser };