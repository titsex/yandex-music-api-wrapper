export interface YandexMusicAccountSettings {
	uid: number
	lastFmScrobblingEnabled: boolean
	facebookScrobblingEnabled: boolean
	shuffleEnabled: boolean
	addNewTrackOnPlaylistTop: boolean
	volumePercents: number
	userMusicVisibility: string
	userSocialVisibility: string
	adsDisabled: boolean
	modified: string
	rbtDisabled: boolean
	theme: string
	promosDisabled: boolean
	autoPlayRadio: boolean
	syncQueueEnabled: boolean
	explicitForbidden: boolean
	childModEnabled: boolean
	wizardIsPassed: boolean
	userCollectionHue: number
}

export interface YandexMusicAccountStatus {
	account: YandexMusicAccount
	permissions: YandexMusicAccountPermissions
	subscription: YandexMusicAccountSubscription
	subeditor: boolean
	subeditorLevel: number
	pretrialActive: boolean
	masterhub: {
		activeSubscriptions: unknown[]
		availableSubscriptions: unknown[]
	}
	plus: {
		hasPlus: boolean
		isTutorialCompleted: boolean
	}
	hasOptions: unknown[]
	defaultEmail: string
	userhash: string
}

interface YandexMusicAccount {
	now: string
	uid: number
	login: string
	region: number
	fullName: string
	secondName: string
	firstName: string
	displayName: string
	birthday: string
	serviceAvailable: boolean
	hostedUser: boolean
	'passport-phones': string[][]
	registeredAt: string
	child: boolean
	nonOwnerFamilyMember: boolean
}

interface YandexMusicAccountPermissions {
	until: string
	values: string[]
	default: string[]
}

interface YandexMusicAccountSubscription {
	autoRenewable: string[][]
	nonAutoRenewableRemainder: {
		days: number
	}
	hadAnySubscription: boolean
	canStartTrial: boolean
	mcdonalds: boolean
}
