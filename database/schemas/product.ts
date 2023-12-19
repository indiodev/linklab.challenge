import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
	// _id: String,
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	image_url: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;
