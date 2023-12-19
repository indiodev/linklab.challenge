import ProductCard from '@/components/product-card';
import { Product } from '@/models';
import Image from 'next/image';
import styles from './page.module.scss';

const product_list: Product[] = [
	{
		id: '3c0e6e3d-789a-4b7c-bf5a-9c2b91ef9c8d',
		created_at: '2023-01-01T12:00:00Z',
		updated_at: '2023-01-01T12:00:00Z',
		name: 'Produto 1',
		price: 19.99,
		image_url:
			'https://fastly.picsum.photos/id/921/376/258.jpg?hmac=sdTckxdxzUacLn81wDx0MRzmxkjeDrj5hvqNjqMYNAw',
		rating: 4.5,
	},
	{
		id: 'eac26c0f-2e77-491f-bf3e-7dcad1e3f1c2',
		created_at: '2023-01-02T12:00:00Z',
		updated_at: '2023-01-02T12:00:00Z',
		name: 'Produto 2',
		price: 29.99,
		image_url:
			'https://fastly.picsum.photos/id/921/376/258.jpg?hmac=sdTckxdxzUacLn81wDx0MRzmxkjeDrj5hvqNjqMYNAw',
		rating: 3.8,
	},
	{
		id: 'a8d9f6a2-1e4b-47dc-932d-7aa246b5e3c5',
		created_at: '2023-01-03T12:00:00Z',
		updated_at: '2023-01-03T12:00:00Z',
		name: 'Produto 3',
		price: 39.99,
		image_url:
			'https://fastly.picsum.photos/id/921/376/258.jpg?hmac=sdTckxdxzUacLn81wDx0MRzmxkjeDrj5hvqNjqMYNAw',
		rating: 4.2,
	},
];

export default function Home() {
	return (
		<section className={styles.pageRoot}>
			<section className={styles.hero}>
				<div className={styles.heroCard}>
					<h2>Produtos</h2>

					<div>
						<Image
							src={'./icons/lab.svg'}
							alt={'Icon'}
							width={32}
							height={32}
						/>
						<p>Vidrarias e Equipamentos</p>
					</div>
				</div>
				<div className={styles.heroCardHighlight}>
					<h2>Químicos</h2>

					<div>
						<Image
							src={'./icons/bottle.svg'}
							alt={'Icon'}
							width={32}
							height={32}
						/>
						<p>Materiais Químicos</p>
					</div>
				</div>
				<div className={styles.heroCard}>
					<h2>Laboratórios</h2>

					<div>
						<Image
							src={'./icons/tool.svg'}
							alt={'Icon'}
							width={32}
							height={32}
						/>
						<p>Ferramentas e utensílios</p>
					</div>
				</div>
			</section>

			<section className={styles.product}>
				<h2 className={styles.title}>Produtos</h2>
				<div className={styles.productList}>
					{product_list.map((product) => (
						<ProductCard
							key={product.id}
							data={product}
						/>
					))}
				</div>
			</section>
		</section>
	);
}
