const fetch = require('node-fetch');
const ProxyAgent = require('proxy-agent');
const apis = ["mini", "api"];
const formats = ["jpeg", "png"];

module.exports = function(params = {
	resolution: "1024x768",
	scale: 1000,
	format: 0,
	api: 0
}, callback = Function){ 
	if(!params.url)throw new Error('Required parameter not specified: URL');
	if(!callback)throw new Error('No callback!');
	const uri = `http://${apis[params.api]}.s-shot.ru/${params.resolution}/${params.scale}/${formats[params.format]}/?${params.url}`;
	
	if(params.proxy && !/^(socks[4-5]{0,1}|(pac\+){0,1}+https{0,1})/.test(params.proxy))throw new Error('VPNError: undefined type of protocol')
	fetch(uri, params.proxy ? {
		agent: new ProxyAgent(params.proxy)
	} : undefined).then(async function(res){
		callback(await res.buffer());
	})
}; 

