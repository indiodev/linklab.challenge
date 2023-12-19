type ContentType = 'application/json' | 'text/html';

export class HttpClient {
	constructor(private uri: string) {}

	private async transform(content_type: ContentType, response: Response) {
		const converter = {
			'text/html': async (response: Response) => await response.text(),
			'application/json': async (response: Response) => await response.json(),
		};

		return converter[content_type](response);
	}

	private async http<T = unknown>(path: string, config: RequestInit) {
		const sanitized_path = path.startsWith('/') ? path.slice(1) : path;

		const request = new Request(`${this.uri}/${sanitized_path}`, config);
		const response = await fetch(request);
		const content_type = response.headers.get('content-type')?.split(';')[0];

		const data = await this.transform(content_type as ContentType, response);

		//change to handle errors custom
		if (!response.ok)
			throw new Error(response.statusText, {
				cause: response,
			});

		return data as T;
	}

	public async get<T = unknown>(
		path: string,
		config?: Omit<RequestInit, 'method'>,
	) {
		const init: RequestInit = { method: 'GET', ...config };
		return await this.http<T>(path, init);
	}

	public async post<T = unknown, U = unknown>(
		path: string,
		body: T,
		config?: Omit<RequestInit, 'method'>,
	): Promise<U> {
		Promise<U>;
		const init: RequestInit = {
			method: 'POST',
			body: JSON.stringify(body),
			...config,
		};

		return await this.http<U>(path, init);
	}

	public async put<T = unknown, U = unknown>(
		path: string,
		body: T,
		config?: Omit<RequestInit, 'method'>,
	): Promise<U> {
		const init = { method: 'put', body: JSON.stringify(body), ...config };
		return await this.http<U>(path, init);
	}
}
