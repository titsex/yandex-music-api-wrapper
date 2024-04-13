import YandexMusicAccountAPI from './api/account'
import Fetcher from './fetcher'

class YandexMusicAPI {
	private readonly fetcher: Fetcher

	public account: YandexMusicAccountAPI

	/**
	 * @param token Yandex music token
	 */
	constructor(token: string) {
		this.fetcher = new Fetcher(token)

		this.account = new YandexMusicAccountAPI(this.fetcher)
	}
}

export default YandexMusicAPI
