import Products from '@/components/products';
import styles from './page.module.scss';

export default async function Home() {
	return (
		<section className={styles.pageRoot}>
			{/* <section className={styles.hero}>
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
			</section> */}

			<Products />
		</section>
	);
}
