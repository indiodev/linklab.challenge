import Header from '@/components/header';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.scss';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Linklab Challenge',
	description: 'Linklab fullstack challenge',
	icons: {
		icon: '/favicon.ico',
	},
};

interface Props {
	children: ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="pt-BR">
			<body className={dm_sans.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
