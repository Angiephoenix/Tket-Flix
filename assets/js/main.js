//page scroll progress
//Gsap Animations
//	var tl 					= 	new TimelineLite({paused:true}),
//		intro				=	$('.main_header .logo_container'),
//		l 	        	    =	$('.l'),
//		build_bg			=	$('.load_bg'),
//		tlLoader 			= 	new TimelineMax({onComplete: loadContent});
//	
//	//mainpage timeline	
//	tl
//		.staggerFrom(l, 1,{opacity:0, y:10, ease:Power2.easeOut}, .3)
//		
//	//loader timeline	
//	tlLoader
//
//    function loadContent(){
//		var tlLoaderOut = new TimelineLite({onComplete: contentIn});
//		tlLoaderOut
//			.to(intro, 1,{css:{className:'+=logo_container in'}}, '+=.5')
//			.to(intro, 1,{css:{className:'+=logo_container out'}}, '+=1')
//			.to(build_bg, 1,{css:{className:'+=load_bg out'}}, '-=1')
//    
//	}
//	
//	function contentIn(){
//		tl.play();
//	}

$('body').delegate('#list_form','submit',function(e){
	$('#submit_btn').html(`confirming... <span class="mdi mdi-loading mdi-spin"></span>`);
	e.preventDefault();
	var email	=	$('#email').val(),
		fd		=	{subscribe:1,email:email};
	
		$.ajax({
			url 	: 'ajax/process.php',
			method	:	'POST',
			data	:	fd,
            dataType: 'json',
			success: function(data){
				
				if(data.response == 'user_exist'){
					$('body').append(`<div class="error_notification extra_ticket_info flexed"><div><span class="mdi mdi-information-outline"></span> Opps... You seem to have already registered</div><span class="mdi mdi-close"></span></div>`);
					$('#submit_btn').html(`Join the list`);
				}else if(data.response == 1){
					$('body').append(`<div class="error_notification extra_ticket_info flexed" style="background:var(--green)"><div><span class="mdi mdi-information-outline"></span> Thank you for joining our exclusive List <span style="font-size:1.2em;">😍😍😍</span></div><span class="mdi mdi-close"></span></div>`);
					$('#submit_btn').html(`Join the list`);
				}
				
				//dismiss error notification
				setTimeout(function(){
					$('.error_notification').css({"bottom":"0"});
				},4000);
				setTimeout(function(){
					$('.error_notification').remove();
				},4200);
				
				
			}
		});
	
});

$('body').delegate('.error_notification','click',function(){
	$(this).css({"bottom":"0"});
	$(this).remove();
});


