# riot-games-api-wrapper

> The purest wrapper over the riot games api

# Feature

| api     | ☑️ |
|---------|----|
| Account | ✅  |

# Using

```typescript
import YandexMusicAPI from 'yandex-music-api-wrapper'

const ym = new YandexMusicAPI('OAuth token')

ym.account.status()
	.then(console.log)
	.catch(console.error)
```

# Documentation

### YandexMusicAPI[token]

-   `token` is required, to get it, check out this [discussion](https://github.com/MarshalX/yandex-music-api/discussions/513)
