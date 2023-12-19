import { API } from '@/lib';
import { Product } from '@/models';
import ProductCard from '../product-card';
import './styles.scss';

async function getProducts() {
	const products = await API.get<Product[]>('/products');

	return { products };
}

export default async function Products() {
	const { products } = await getProducts();

	return (
		<section className="product">
			<h2 className="title">Produtos</h2>
			<div className="product-list">
				{products.map((product) => (
					<ProductCard
						key={product._id}
						data={product}
					/>
				))}
			</div>
		</section>
	);
}
