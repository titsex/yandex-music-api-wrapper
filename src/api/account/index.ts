import type Fetcher from '@fetcher'

import type { YandexMusicAccountSettings, YandexMusicAccountStatus } from '@api/account/types'

class YandexMusicAccountAPI {
	constructor(private readonly fetcher: Fetcher) {}

	async experiments() {
		return this.fetcher.get<Record<string, string>>('account/experiments')
	}

	async consumePromoCode(code: string, language: string) {
		return this.fetcher.post('account/consume-promo-code', {
			code,
			language,
		})
	}

	async settings() {
		return this.fetcher.get<YandexMusicAccountSettings>('account/settings')
	}

	async status() {
		return this.fetcher.get<YandexMusicAccountStatus>('account/status')
	}
}

export default YandexMusicAccountAPI
