class Fetcher {
	private readonly apiUrl = 'https://yandex-music-cors-proxy.onrender.com/https://api.music.yandex.net:443/'
	private readonly headers: Record<string, string>

	/**
	 * @param token Yandex music token
	 */
	constructor(token: string) {
		this.headers = {
			Authorization: `OAuth ${token}`,
			'User-Agent': 'Yandex-Music-API',
		}
	}

	private async request(endpoint: string, init: RequestInit) {
		const requestURL = `${this.apiUrl}${endpoint}`

		const response = await fetch(requestURL, {
			...init,
			headers: this.headers,
		})

		if (!response.ok)
			throw new Error('Bad request', {
				cause: {
					url: requestURL,
				},
			})

		const json = await response.json()

		return json.result
	}

	async get<T>(endpoint: string): Promise<T> {
		return this.request(endpoint, {
			method: 'GET',
		})
	}

	async post<T>(endpoint: string, body: Record<string, string>): Promise<T> {
		return this.request(endpoint, {
			method: 'POST',
			body: JSON.stringify(body),
		})
	}
}

export default Fetcher
