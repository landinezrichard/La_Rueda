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

	/*Funciones Cristian*/

	$('.carrusel-img-serv').owlCarousel({
	        itemsCustom: [
	            [0, 1]
	        ],
	        navigation: true,
	        autoPlay: false,
	        slideSpeed: 1000,
	        pagination: false
	    });

	$('.cont-select-servicios').click(function(){
	    
	    $(this).children('.despleg-selec-serv').slideToggle('fast');

	});
	
	
	$('#btn_auto').click(function(){
	    $('.btn_pestana_serv').removeClass('active');
	    $(this).addClass('active');
	    $('.cont_gen_servicios').removeClass('selec');
	    $('#cont_auto').addClass('selec');
	});
	
	$('#btn_taxi').click(function(){
	    $('.btn_pestana_serv').removeClass('active');
	    $(this).addClass('active');
	    $('.cont_gen_servicios').removeClass('selec');
	    $('#cont_taxi').addClass('selec');
	});
	
	$('#btn_camion').click(function(){
	    $('.btn_pestana_serv').removeClass('active');
	    $(this).addClass('active');
	    $('.cont_gen_servicios').removeClass('selec');
	    $('#cont_camion').addClass('selec');
	});

	/*Modificar los controles del Owl*/
	$.each($('.owl-prev'),function(elemento){
			$(this).html(arrow_izq);
	});

	$.each($('.owl-next'),function(elemento){
			$(this).html(arrow_der);
	});

});