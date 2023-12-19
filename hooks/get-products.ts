import { API } from '@/lib';
import { Product } from '@/models';
import { useQuery } from '@tanstack/react-query';

async function fetcher() {
	const products = await API.get<Product[]>('/products');
	return products;
}

export default function useGetProducts() {
	return useQuery({
		queryKey: ['GET-PRODUCTS'],
		queryFn: () => fetcher(),
	});
}
