$(document).ready(function()
  {
	$('.loading').fadeOut(2000);
    $(".button_one").click(function()
  {
		$(".div_one").slideToggle(1000);
});
	
	$(".button_two").click(function()
  {
		$(".div_two").slideToggle(1000);
});
	
	$(".content_2").click(function()
  {
	$(".two").slideToggle(1000 , function(){
$(".three").css("color","rgba(255,255,255,0.7)");
		});
		
});
	$(".row#former").animate({
		 borderRadius:'5px',
		 top:'80px',
		 marginLeft:'300px',
},1000);
	
	$(window).scroll(function()
 {
      if($(window).scrollTop() >= 200)
	  {
		  $('nav').removeClass('bg-dark').addClass('bg-success');
	  }	
		else{
			 $('nav').removeClass('bg-success').addClass('bg-dark');
		}
	});
	
	
	$('a[href^="#"]').click(function(){	$('body').animate({scrollTop:$($(this).attr('href')).offset().top},2000)
		
	})

	$(window).scroll(function()
 {
        	if($(window).scrollTop() >= 500)
			{
			$('.about').addClass('select');
			}
		    else{
	$('.about').removeClass('select').addClass('content.one');
			}
				
	})
	
	$(window).scroll(function()
 {
        	if($(window).scrollTop() >= 800)
			{
			$('.about').removeClass('select');
			$('.skills').addClass('select');	
			}
		    else{
	$('.skills').removeClass('select').addClass('content.one');
			}
				
	})
	
	$(".content_2 i").click(function(){
		$(".webcolor").toggle(1000);
	})
	
	var lis=$('.webcolor ul li');
	lis.eq(0).css('backgroundColor','black');
	lis.eq(1).css('backgroundColor','blue');
	lis.eq(2).css('backgroundColor','orange');
	lis.eq(3).css('backgroundColor','red');
	lis.eq(4).css('backgroundColor','gray');
	lis.click(function(){
	var bgcolor=$(this).css('backgroundColor');
		$('h1,h2,h3,h4').css('color',bgcolor);
	})
	
	$('.webcolor img').click(function(){
		var srcImg = $(this).attr('src');
	$('.header2').css('backgroundImage',"url("+srcImg+")");
	})
	
});

	