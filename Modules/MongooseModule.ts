import mongoose from "mongoose";
import seedDb from "../SeedDb";

const clientOptions: object = {
    serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
    },
};

async function connectDb () {
    try {
        await mongoose.connect("mongodb://mongo_db:27017/e-commerce-db", clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });

        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        try {
            await seedDb();

            console.log('Database seeded successfully!');
        } catch (err) {
            console.error('Error:', err);
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

export { connectDb };