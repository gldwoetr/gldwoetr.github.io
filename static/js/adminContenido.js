
let datos = {

	'home': {
		'categorias': [
			'portadocumentos', 
			'hola que tal como-estas espero que bien'
			],


		'.indice': '<li class="liCat"><a href="./categorias/urlCAT.html" target="_blank" class="categorias">nombreCAT</a></li>' 
	},


	'portadocumentos':{}





};







function home(datosHome){
	let catHome = datosHome['categorias']
	for ( i in catHome ){
		let code = datosHome['.indice']
		let url = ''


		if ( catHome[i].includes(' ') ){
			url = catHome[i].replace(' ','-');

			while ( url.includes(' ') ){
				url = url.replace(' ','-')
			
			}

		} 


		if (url !== ''){
			code = code.replace('urlCAT', url)
			code = code.replace('nombreCAT', catHome[i])
		}else{
			code = code.replace('urlCAT', catHome[i])
			code = code.replace('nombreCAT', catHome[i])
		}
	
		document.querySelector('.indice').innerHTML += code;


	}
	

};













for ( pagina in datos ){
	if ( pagina.includes('home') ){
		home( datos['home'] )
		
	}


}



	
  















