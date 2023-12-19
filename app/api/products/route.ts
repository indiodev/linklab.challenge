import dbConnect from '@/database';
import Product from '@/database/schemas/product';
import { NextResponse } from 'next/server';

export async function GET() {
	await dbConnect();

	const products = await Product.find();

	return NextResponse.json(products || []);
}
