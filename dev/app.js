(function () {
	const showMenu = require('./components/MainMenu');
	const tabs = require('./components/Tabs');
	

	document.addEventListener('DOMContentLoaded', onDOMload);

	function onDOMload() {		
		showMenu.init();
		tabs.init();
	}
}())