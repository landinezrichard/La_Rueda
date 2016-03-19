(function () {
	const showMenu = require('./components/MainMenu');
	const tabs = require('./components/Tabs');
	const showContacto = require('./components/Header');
	const $ = require('jquery');
	const tabsLlantas3 = require('./components/Llantas3');
	

	document.addEventListener('DOMContentLoaded', onDOMload);

	function mostrarfiltro () {
		$('.Filtro2-visible').on('click',function(){
			$('.Filtro2-titleIcon').toggleClass('Filtro2-titleIcon--open');
			$('.Filtro2-desplegable').fadeToggle();
		});
	}

	function mostrarOpcionfiltro () {
		/*Filtro desplegable*/
		$('.Filtro2-fieldTitle').click(function (){
			$('.Filtro2-fieldList').fadeOut();
			if($(this).next('.Filtro2-fieldList').is(':visible')){
				$(this).next('.Filtro2-fieldList').fadeOut();
			}
			if($(this).next('.Filtro2-fieldList').is(':hidden')){
				$(this).next('.Filtro2-fieldList').fadeIn();
			}
		});
	}

	function mostrarSociales () {
		/*Social desplegable*/
		$('#mostrarSocial').click(function (e){
			e.preventDefault();
			$('.Redes-desplegable').fadeToggle();
		});
	}

	function onDOMload() {		
		showMenu.init();
		tabs.init();
		tabsLlantas3.init();
		showContacto.init();
		//para la ventana modal
		require('remodal');
		mostrarfiltro();
		mostrarOpcionfiltro();
		mostrarSociales();
	}
}())