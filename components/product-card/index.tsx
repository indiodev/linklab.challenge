import { Product } from '@/models';
import './styles.scss';

import Image from 'next/image';

interface Props {
	data: Product;
}

export default function ProductCard({ data }: Props) {
	return (
		<article className="card-root">
			<header className="card-header">
				<Image
					src={data.image_url}
					alt={`Product Image ${data.name}`}
					fill
				/>
			</header>
			<footer className="card-footer">
				<div className="card-detail">
					<h3>{data.name}</h3>
					<p>R$ {data.price}</p>
				</div>
				<span>Nota: {data.rating}</span>
			</footer>
		</article>
	);
}
