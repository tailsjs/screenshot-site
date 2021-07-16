# screenshot-site [FREE EDITION]
Скриншотер сайтов. Теперь уже точно [FREE EDITION]

* Минус: Через некоторое время, банит ваш IP. Рекомендую использовать с прокси.

## Установка: 

```js
npm install screenshot-site
```

## Использование:
```js
let shot = require("screenshot-site") 

shot({
    url: "github.com"
}, function(){
    return console.log('Готово!')
})
```

## Описание функции:
```js
shot({
    url: "github.com", // isNeed? true
    resolution: "1920x1080", // isNeed? false; default: 1024x768
    scale: 1000, // isNeed? false; default: 1000,
    format: 1, // isNeed? false; default: 0; 0 for JPEG, 1 for PNG
    api: 1, // isNeed? false; default: 0; 0 for "mini", 1 for "api".
    filename: "./screen.png", // isNeed? false; default: "screenshot.png"
    proxy: "127.0.0.1:8080" // isNeed? false
}, function(){ return console.log('Готово!') }) // isNeed? true
```
### Параметры:
|Параметр|Тип|Нужен|Описание|
|-|-|-|-|
|url|string|true|Ссылка|
|resolution|string/number|false|Разрешение скрина|
|scale|number|false|Ширина скрина|
|format|number|false|Формат скрина (0 для jpg, 1 для png)|
|api|number|false|Какой API использовать? (0 для mini, 1 для api)|
|filename|string|false|Куда сохранять скриншот и как назвать|
|proxy|string|false|Прокси|

* После параметров, необходимо вставить callback.
* В поле proxy необязательно вставлять http://