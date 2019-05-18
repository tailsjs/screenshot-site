module.exports.getUrl = function(x, y, format, newUrl){
	if(format != "png" && format != "jpeg"){
		throw new Error(`Ошибка! Неккоректный формат картинки!`)
	}
	if(isNaN(y)){
		throw new Error(`Ошибка! Неккоректная ширина!`)
	}
	if(!newUrl){
		 throw new Error(`Ошибка! Не указан URL!`)
	}
	if(!x){
		 throw new Error(`Ошибка! Не указан размер по коордитате XY!`)
	}
	if(!y){
		 throw new Error(`Ошибка! Не указана ширина скрина!`)
	}
	if(!format){
		format = `jpeg`
	};
	
	let url = `http://mini.s-shot.ru/` + x + `/` + y + `/` + format + `/?` + newUrl;
    return url;
}