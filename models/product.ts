import { Base } from './base';

export interface Product extends Base {
	name: string;
	price: number;
	image_url: string;
	rating: number;
}
