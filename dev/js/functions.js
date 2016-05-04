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

	$('.centrosSlider').owlCarousel({
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

	/*Carrusel Noticias*/

	$('.cont_gen_otras_not').owlCarousel({
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

	/*Carrusel Logos nueva int-llantas*/
	$(".Intllantas-logos").owlCarousel({
		itemsCustom:[
			[0,2],[481,3],[550,4],[1050,5],
		],
		navigation:true,
		autoPlay:8000,
		pagination:false,
	});

	/*Carrusel Caracteristicas nueva int-llantas*/
	$(".Intllantas-carList").owlCarousel({
		itemsCustom:[
			[0,2],[481,3],[550,5],[1050,8],
		],
		navigation:true,
		autoPlay:8000,
		pagination:false,
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

	// var owl=$("#carrusel_medios_pago");
	// owl.owlCarousel({
	// 	itemsCustom:[
	// 		[0,2],[481,3],[550,5],[1050,9],
	// 	],
	// 	navigation:true,
	// 	autoPlay:8000,
	// 	pagination:false,
	// });

	/*Modificar los controles del Owl*/
	$.each($('.owl-prev'),function(elemento){
			$(this).html(arrow_izq);
	});

	$.each($('.owl-next'),function(elemento){
			$(this).html(arrow_der);
	});

});