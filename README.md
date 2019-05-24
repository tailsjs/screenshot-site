# screenshot-site
Модуль NodeJS для скриншота сайта

## Установка: 

```js
npm install screenshot-site
```

## Использование:
```js
let siteShot = require("screenshot-site") 

siteShot(1000, 1000, "jpeg", "github.com")
```

## Возращается:

```js
string: http://mini.s-shot.ru/1000/1000/jpeg/?github.com
```

Рассмотрим немного
```js
siteShot(разрешение, размер, "формат", "ссылка")
```

* разрешение - указывается в пикселях, например (1024x768), для полноразмерного скриншота указываем только ширину (1024)

* размер - указывается ширина масштабированной картинки

* формат - может принимать два значения (JPEG|PNG), по умолчанию "JPEG"

* ссылка - ссылка на сайт


Если чет не работает, пишите [мне](https://vk.com/tailsjs) в лс.