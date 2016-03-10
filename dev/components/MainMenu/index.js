var showMenu = (function () {
	const btnMenu = document.getElementById('showMenu');
	const menu = document.getElementById('menu');	

	function suscribeEvents () {
		btnMenu.addEventListener('click',onClickMenu);
	}

	function onClickMenu () {
		menu.classList.toggle('MainMenu-list--show')
	}

	return {
		init : function () {
			suscribeEvents();	
		} 
	};	
})();

module.exports = showMenu;