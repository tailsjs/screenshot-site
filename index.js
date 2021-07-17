const fetch = require('node-fetch');
const ProxyAgent = require('proxy-agent');
const apis = ["mini", "api"];
const formats = ["jpeg", "png"];

module.exports = function(params = JSON, callback = Function){ 
	if(!params.url)throw new Error('Required parameter not specified: URL');
	if(!params.resolution)params.resolution = "1024x768";
	if(!params.scale)params.scale = 1000;
	if(!params.format || params.format != 0 && params.format != 1)params.format = 0;
	if(!params.api || params.api < 0 || params.api > 1)params.api = 0;
	if(!callback)throw new Error('No callback!');
	uri = `http://${apis[params.api]}.s-shot.ru/${params.resolution}/${params.scale}/${formats[params.format]}/?${params.url}`;
	
	if(params.proxy){
		if(!/socks|http|pac\+http|https/.test(params.proxy))throw new Error('VPNError: undefined type of protocol')
		try{
			fetch(uri, {
				agent: new ProxyAgent(params.proxy)
			}).then(async function(res){
				callback(await res.buffer());
			})
		}catch(e){
			throw new Error(`Proxy error!\n${e}`)
		}
	}else{
		fetch(uri).then(async function(res){
			callback(await res.buffer());
		})
	}
}; 

