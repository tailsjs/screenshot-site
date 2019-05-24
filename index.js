module.exports = function(x, y, format, newUrl){
	if (!newUrl) {
		 throw new Error('Не указан URL!');
	};
	if (!x) {
		 throw new Error('Не указан размер по коордитате XY!');
	};
	if (isNaN(y) || !y) {
		throw new Error('Неккоректная ширина!');
	};
	if (format !== "png" && format !== "jpeg") {
		throw new Error('Неккоректный формат картинки! Используются только: JPEG и PNG!');
	};
	if (!format) {
		format = 'jpeg';
	};
	
	let url = `http://mini.s-shot.ru/'${x}/${y}/${format}/?${newUrl}`;
    return url;
}