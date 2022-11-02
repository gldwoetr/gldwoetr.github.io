var card = '<div class="card"> link </div>'
var code = '<a href="pageURL" rel="nofollow" target="_blank"><img src="imgURL"></a>\n<h4>Title</h4>'


var datos = [

['https://www.amazon.es/GraduatePro-Conferencias-Organizador-Conferencia-Presentaci%C3%B3n/dp/B085RLZW1D/ref=sr_1_1?crid=27UC4EDTDZN9O&keywords=carpetas+con+cremallera&qid=1666364961&qu=eyJxc2MiOiI1LjAzIiwicXNhIjoiNC4zOSIsInFzcCI6IjIuNTIifQ%3D%3D&sprefix=carpetas+con%2Caps%2C321&sr=8-1', 
'https://m.media-amazon.com/images/I/71ZCagaTgdL.__AC_SX300_SY300_QL70_ML2_.jpg',
'GraduatePro <br>Carpeta de Cuero para conferencias de color negro con tipo de hoja A4 y ziper, incluye un Bloc de Notas y muchas ranuras para tarjetas'
], 



[
'https://www.amazon.es/Projects-Oxford-compartimentos-calculadora-portal%C3%A1pices/dp/B07PVGYBVX/ref=sr_1_5?crid=27UC4EDTDZN9O&keywords=carpetas+con+cremallera&qid=1666364961&qu=eyJxc2MiOiI1LjAzIiwicXNhIjoiNC4zOSIsInFzcCI6IjIuNTIifQ%3D%3D&sprefix=carpetas+con%2Caps%2C321&sr=8-5',
'https://m.media-amazon.com/images/I/81uJbQP+ZNL._AC_SX679_.jpg', 
'Projects Oxford <br> Carpeta negra de microfibra con 2 bolsillos delanteros con cremallera y asa, posee múltiples compartimentos para tarjetas, asi como un portalápices, además viene acompañado con una calculadora y para tipos de hoja A4.'
],


[
'https://www.amazon.es/AllSquare-conferencias-calculadora-material-sint%C3%A9tica/dp/B07D3C6YF1/ref=sr_1_11?crid=27UC4EDTDZN9O&keywords=carpetas+con+cremallera&qid=1666364961&qu=eyJxc2MiOiI1LjAzIiwicXNhIjoiNC4zOSIsInFzcCI6IjIuNTIifQ%3D%3D&sprefix=carpetas+con%2Caps%2C321&sr=8-11'
,'https://m.media-amazon.com/images/I/911MVvluntS._AC_SX679_.jpg', 
'Carpeta de conferencias (folio o padfolio)<br> Hecha de piel para hojas tipo A4, posee un cierre o cremallera color negro. Se incluye una calculadora y bloc de notas. Bolsillos múltiples muy útiles para reuniones o conferencias de lujo'
],


[
'https://www.amazon.es/Stylio-portadocumentos-cremallera-entrevista-organizador/dp/B071CG6BZP/ref=sr_1_3?crid=27UC4EDTDZN9O&keywords=carpetas+con+cremallera&qid=1666364961&qu=eyJxc2MiOiI1LjAzIiwicXNhIjoiNC4zOSIsInFzcCI6IjIuNTIifQ%3D%3D&sprefix=carpetas+con%2Caps%2C321&sr=8-3'
,'https://m.media-amazon.com/images/I/71Pm-bLZ9UL._AC_SX679_.jpg', 
'Stylio <br> Portadocumentos con ziper. De tipo A4 muy util para conferencias. Posee ranuras o bolsillos para Ipad/Tableta, Teléfono y demás accesorios. Viene con un Bloc de Notas y está fabricado de Cuero Vegano Negro como un Piano'
],


[
'https://www.amazon.es/Lautus-Designs-portafolios-profesional-organizadora/dp/B07K6LVGWY/ref=sr_1_37?crid=27UC4EDTDZN9O&keywords=carpetas+con+cremallera&qid=1666364961&qu=eyJxc2MiOiI1LjAzIiwicXNhIjoiNC4zOSIsInFzcCI6IjIuNTIifQ%3D%3D&sprefix=carpetas+con%2Caps%2C321&sr=8-37'
,'https://m.media-amazon.com/images/I/51QxoUIRO+L._AC_SY300_SX300_.jpg', 
'Lautus Designs <br> Portadocumentos de negocios con cremallera. Carpeta profesional negra mate, la mejor organizadora con funda para tablets de 10.5 pulgadas. Trae un bloc para notas y caja de regalo'
],


[
'https://www.amazon.es/Carchivo-Portadocumentos-Venture-cremallera-turquesa/dp/B08MBVL147/ref=sr_1_13?crid=27UC4EDTDZN9O&keywords=carpetas+con+cremallera&qid=1666364961&qu=eyJxc2MiOiI1LjAzIiwicXNhIjoiNC4zOSIsInFzcCI6IjIuNTIifQ%3D%3D&sprefix=carpetas+con%2Caps%2C321&sr=8-13'
,'https://m.media-amazon.com/images/I/91HPQjncvPL._AC_SY550_.jpg', 
'Carchivo <br> Portadocumentos Venture con cremallera, para hojas tamaño A5. Posee un acabado gris y turquesa'
],



[
'https://www.amazon.es/Toplive-documentos-tarjetero-conferencia-D-Marbling-Pink/dp/B07KB542SN/ref=sr_1_18?crid=27UC4EDTDZN9O&keywords=carpetas+con+cremallera&qid=1666364961&qu=eyJxc2MiOiI1LjAzIiwicXNhIjoiNC4zOSIsInFzcCI6IjIuNTIifQ%3D%3D&sprefix=carpetas+con%2Caps%2C321&sr=8-18'
,'https://m.media-amazon.com/images/I/71VlR0KLhxL._AC_SX425_.jpg', 
'Toplive D-Marbling-Pink <br> Tipo A4 de piel con bloc de notas, soporte para tarjetas, un bolsillo para tablets de hasta 10.5 pulgadas, diseño color rosa para mujeres y jovenes universitarias.'
],


[
'https://www.amazon.es/Carpeta-italiana-carpeta-cremallera-anillas/dp/B07RQSHPCN/ref=sr_1_20?crid=27UC4EDTDZN9O&keywords=carpetas+con+cremallera&qid=1666364961&qu=eyJxc2MiOiI1LjAzIiwicXNhIjoiNC4zOSIsInFzcCI6IjIuNTIifQ%3D%3D&sprefix=carpetas+con%2Caps%2C321&sr=8-20'
,'https://m.media-amazon.com/images/I/818mDbduMmL._AC_SX425_.jpg', 
'Portadocumentos de cuero italiano <br> tipo A4 con cremallera, posee 4 anillas y funda de piel azul.'
]




]




for(let i=0; i<=datos.length-1; i++){
	valor = code.replace( 'pageURL', datos[i][0] );
	valor = valor.replace( 'imgURL', datos[i][1] );
	valor = valor.replace('Title', datos[i][2])

	dat = card.replace('link', valor)
	document.write(dat);

 
}