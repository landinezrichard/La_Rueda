var showContacto = (function () {

	/* Dependencias*/
	const $ = require('jquery');

	const btnContacto = document.getElementById('contactoButton');
	const contacto = document.getElementById('contacto-mobile');	

	function suscribeEvents () {
		btnContacto.addEventListener('click',onClickMenu);
	}

	function onClickMenu () {
		$(contacto).fadeToggle();
	}

	return {
		init : function () {
			suscribeEvents();	
		} 
	};	
})();

module.exports = showContacto;