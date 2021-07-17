const shot = require("./index.js")

shot({
    url: "github.com", // isNeed? true
    resolution: "1920x1080", // isNeed? false; default: 1024x768
    scale: 1000, // isNeed? false; default: 1000,
    format: 1, // isNeed? false; default: 0; 0 for JPEG, 1 for PNG
    api: 0 // isNeed? false; default: 0; 0 for "mini", 1 for "api".
    //proxy: "YOUR_PROXY" // isNeed? false
}, function(buffer){ // isNeed? true; response: buffer
    /*
    ** ЗДЕСЬ ВОЗВРАЩАЕТСЯ buffer КАРТИНКИ.
    */
   return console.log(buffer)
})