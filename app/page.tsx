import Hero from '@/components/hero';
import Products from '@/components/products';
import styles from './page.module.scss';

export default async function Home() {
	return (
		<section className={styles.pageRoot}>
			<Hero/>
			<Products />
		</section>
	);
}
