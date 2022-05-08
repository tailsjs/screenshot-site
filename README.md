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
}, function(buffer){
    return console.log(buffer)
})
```

## Пример параметров:
```js
shot({
    url: "github.com", // isNeed? true
    resolution: "1920x1080", // isNeed? false; default: 1024x768
    scale: 1000, // isNeed? false; default: 1000,
    format: 1, // isNeed? false; default: 0; 0 for JPEG, 1 for PNG
    api: 1, // isNeed? false; default: 0; 0 for "mini", 1 for "api".
    proxy: "http://127.0.0.1:8080" // isNeed? false
}, function(buffer){ 
    return console.log(buffer) 
}) // isNeed? true; response: image buffer
```
## Параметры:
|Параметр|Тип|Нужен|Описание|
|-|-|-|-|
|url|string|true|Ссылка|
|resolution|string/number|false|Разрешение скрина|
|scale|number|false|Ширина скрина|
|format|number|false|Формат скрина (0 для jpg, 1 для png)|
|api|number|false|Какой API использовать? (0 для mini, 1 для api)|
|proxy|string|false|Прокси|

### Прокси
Поддерживаются:
1. http (http://)
2. https (https://)
3. socks (socks://)
4. socks4 (socks4://) или socks5 (socks5://)
5. pac (pac+http://)

### После параметров, необходимо вставить callback.