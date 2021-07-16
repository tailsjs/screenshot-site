const shot = require("./index.js")

shot({
    url: "github.com", // isNeed? true
    resolution: "1920x1080", // isNeed? false; default: 1024x768
    scale: 1000, // isNeed? false; default: 1000,
    format: 1, // isNeed? false; default: 0; 0 for JPEG, 1 for PNG
    api: 1, // isNeed? false; default: 0; 0 for "mini", 1 for "api".
    filename: "./screen.png", // isNeed? false; default: "screenshot.png"
    //proxy: "127.0.0.1:8080" // isNeed? false
}, function(){ 
    return console.log('Готово!') 
})