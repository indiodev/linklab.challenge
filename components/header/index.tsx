import Image from 'next/image';
import Link from 'next/link';
import './styles.scss';

export default function Header() {
	return (
		<header className="header-root">
			<section className="header-container">
				<Image
					src={'./logo.svg'}
					alt={'Logo'}
					width={159}
					height={35}
					priority
				/>

				<nav className="header-nav">
					<ul className="nav-menu">
						<li className="menu-item">
							<a href="#">Inicio</a>
						</li>
						<li className="menu-item">
							<a href="#">Produtos</a>
						</li>
						<li className="menu-item">
							<a href="#">Laudos</a>
						</li>
						<li className="menu-item">
							<a href="#">Sobre nós</a>
						</li>
						<li className="menu-item">
							<a href="#">Certificações</a>
						</li>
						<li className="menu-item">
							<a href="#">Contato</a>
						</li>
					</ul>
				</nav>

				<Link
					href={'/'}
					className="link-button"
				>
					<Image
						src={'/icons/streamline.svg'}
						width={15}
						height={15}
						alt="Streamline Image Icon"
					/>
					<span>Orçamento</span>
				</Link>
			</section>

				
			{/* <Image
				src={'./label.svg'}
				width={186}
				height={186}
				alt="Label image"
				className="label"
			/> */}

			{/* <Image
				src={'./points.svg'}
				width={311}
				height={343}
				alt="Label image"
				className="points"
			/> */}
		</header>
	);
}
