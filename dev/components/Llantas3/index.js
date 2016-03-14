var tabs = (function () {

	/* Dependencias*/
	const $ = require('jquery');	

	/*
	* Objeto con valores de clases que se van a agregar y los elementos que vamos a obtener del DOM
	*/

	var st = {
		tabs: '.Llantas3-tabs',
		tabs_item: '.Llantas3-tabsItem',
		tabs_item_target: '.Llantas3-tabsItemLink',
		seleccion: 'Llantas3-tabs--is-selected',
		activa: 'Llantas3-tabs--is-active'
	};

	// Objeto vacío que guardará elementos que se manejan por HTML.
	var dom = {}

	// Función que llenará al objeto dom con los objetos HTML a través de jQuery ($).
	var catchDom = function() {
		dom.tabs_item_target = $(st.tabs_item_target, st.tabs);
	};

	// Función donde establecemos los eventos que tendrán cada elemento.
	var suscribeEvents = function() {
		dom.tabs_item_target.on('click', events.eSelectedTab);
	};

	/* Objeto que guarda métodos que se van a usar en cada evento definido 
	     en la función suscribeEvents. */
	var events = {
		eSelectedTab: function(e) {
			self = $(this);
			self.addClass(st.seleccion);
			var brother = self.parent(st.tabs_item).siblings();
			$(st.tabs_item_target, brother).removeClass(st.seleccion);
			var pane = self.attr('data-tab');
			$("#" + pane).addClass(st.activa);
			$("#" + pane).siblings().removeClass(st.activa);
		}
	};

	// Función que inicializará los funciones decritas anteriormente.
	var initialize = function() {
		catchDom();
		suscribeEvents();
	};

	/* Retorna un objeto literal con el método init haciendo referencia a la 
	      función initialize. */
	return {
		init: initialize
	};

})();

module.exports = tabs;