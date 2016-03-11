$(document).ready(function() {

	var arrow_izq ='<span class="icon-chevron-thin-left"></span>';
	var arrow_der ='<span class="icon-chevron-thin-right"></span>';

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

	$.each($('.owl-prev'),function(elemento){
			$(this).html(arrow_izq);
	});

	$.each($('.owl-next'),function(elemento){
			$(this).html(arrow_der);
	});

});