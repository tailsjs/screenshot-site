const fs = require("fs");
const request = require("request");
apis = ["mini", "api"];
formats = ["jpeg", "png"];
save_formats = ["jpg", "png"];

module.exports = function(params = JSON, callback = Function){ 
	if(!params.url)throw new Error('Required parameter not specified: URL');
	if(!params.resolution)params.resolution = "1024x768";
	if(!params.scale)params.scale = 1000;
	if(!params.format || params.format != 0 && params.format != 1)params.format = 0;
	if(!params.api || params.api < 0 || params.api > 1)params.api = 0;
	if(!params.filename)params.filename = `screenshot.${save_formats[params.format]}`;
	if(!callback)throw new Error('No callback!');
	uri = `http://${apis[params.api]}.s-shot.ru/${params.resolution}/${params.scale}/${formats[params.format]}/?${params.url}`;

	request(uri).pipe(fs.createWriteStream(params.filename)).on('close', callback); 
}; 