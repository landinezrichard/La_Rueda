(function () {
	const showMenu = require('./components/MainMenu');
	const tabs = require('./components/Tabs');
	const showContacto = require('./components/Header');	

	document.addEventListener('DOMContentLoaded', onDOMload);

	function onDOMload() {		
		showMenu.init();
		tabs.init();
		showContacto.init();		
	}
}())