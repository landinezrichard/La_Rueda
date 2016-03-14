(function () {
	const showMenu = require('./components/MainMenu');
	const tabs = require('./components/Tabs');
	const showContacto = require('./components/Header');
	const $ = require('jquery');
	const tabsLlantas3 = require('./components/Llantas3');
	

	document.addEventListener('DOMContentLoaded', onDOMload);

	function onDOMload() {		
		showMenu.init();
		tabs.init();
		tabsLlantas3.init();
		showContacto.init();
		//para la ventana modal
		require('remodal');
	}
}())