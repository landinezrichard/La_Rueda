(function () {
	const showMenu = require('./components/MainMenu');
	const tabs = require('./components/Tabs');
	const showContacto = require('./components/Header');
	const $ = require('jquery');
	

	document.addEventListener('DOMContentLoaded', onDOMload);

	function onDOMload() {		
		showMenu.init();
		tabs.init();
		showContacto.init();
		//para la ventana modal
		require('remodal');		
	}
}())