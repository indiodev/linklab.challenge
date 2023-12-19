import dotenv from "dotenv";
import mongoose from 'mongoose';
import Product from './schemas/product';

dotenv.config()

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) throw new Error('Missing MONGO_URI');

mongoose.connect(MONGO_URI);

const data = [
	{
		name: 'Relógio',
		price: 99.9,
		image_url:
			'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		rating: 4.5,
	},
	{
		name: 'Fones de ouvidos',
		price: 199.9,
		image_url:
			'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		rating: 3.8,
	},
	{
		name: 'Óculos de sol',
		price: 59.9,
		image_url:
			'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		rating: 5,
	},
];

async function seeder() {
	try {
		const products = await Product.find({});

		if (products.length > 0) return;

		await Product.insertMany(data);
		console.log('Database seeded!');
	} catch (error) {
		console.log('Error seeder: ', error);
	} finally {
		mongoose.disconnect();
	}
}

seeder().then(() => {
	process.exit(0);
});

