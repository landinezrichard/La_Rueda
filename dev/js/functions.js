$(document).ready(function() {

	/**/
	var arrow_izq ='<span class="icon-chevron-thin-left"></span>';
	var arrow_der ='<span class="icon-chevron-thin-right"></span>';

	/*Banner del Index*/
	$('.Sliderindex--desktop.owl-carousel').owlCarousel({
		itemsCustom: [
			[0, 1]
		],
		navigation: true,
		autoPlay: false,
		slideSpeed: 1000,
		pagination: false
	});	

	$('.centrosSlider.owl-carousel').owlCarousel({
		itemsCustom: [
			[0, 1]
		],
		navigation: true,
		autoPlay: false,
		slideSpeed: 1000,
		pagination: false
	});

	/*Carrusel Destacados*/	

	$('.Destacados-list.owl-carousel').owlCarousel({
		itemsCustom: [
			[0, 1],
			[800,2],
			[1145,3]
		],
		navigation: true,
		autoPlay: false,
		slideSpeed: 1000,
		pagination: false
	});

	/*Modificar los controles del Owl*/
	$.each($('.owl-prev'),function(elemento){
			$(this).html(arrow_izq);
	});

	$.each($('.owl-next'),function(elemento){
			$(this).html(arrow_der);
	});

	/*Paginación jPaginate*/

	$("#paginar").paginate({
		count: 3,
		start: 1,
		display: 5,
		text_color: '#fff',
		text_hover_color: '#000',
		background_color: '#F5A118',
		border_hover_color: '#F5A118',
		images: false,
		onChange: function(page){
					$('._current','.Llantas2-pages').removeClass('_current').hide();
					$('#page'+page).addClass('_current').show();
				}
	});

});