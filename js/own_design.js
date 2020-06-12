$(document).ready(function() {

$(function(){
		$.scrollUp({
			scrollDistance:50,
			scrollImg: true

		});
	});
	
	var typed = new Typed('.typing', {
		strings: ["", "Al-amin ." ," A web designer .", " Also webdeveloper ",
		"Graphics Designer ."],
		loop:true,
		typeSpeed: 200,
		backSpeed : 150,
		backDelay:10,
		
	});
	$(".bar_button").on("click",function(){
		$(".menu_div").toggleClass('display');

	});
	$("#wraper").on("click",function(){
		$(".icon").toggleClass("close");
	});
	// JQUERY PULGINS sTARTED fromCharCode(chars...: int)
	$(function(){
		$.scrollUp({
			scrollDistance:50,
			scrollImg: true

		});
	});
// SCROLL UP PLUGINS ENDS 

		$(".list_port li").on("click",function(){
			$(this).addClass("active").siblings().removeClass('active')
		});
$(".list_port li").on("click",function(){
	if($(".seo_list").hasClass("active")){
		
		$("#all_image").hide(500);
		$("#webdisign").fadeOut();
		$("#seo").show('slow');

	}else if($(".webdisign").hasClass("active")){
		
		$("#seo").fadeOut();
		$("#all_image").fadeOut();
		$("#webdisign").show('slow');
	}else if($(".all_image").hasClass("active")){
		
		$("#seo").fadeIn('slow');
		$("#webdisign").show(1000).slideDown();
		$("#all_image").show('slow');
	}
});

});