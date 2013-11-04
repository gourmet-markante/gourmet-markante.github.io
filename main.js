$(document).ready(function(){

  $('#speisekarte #circluar-pics .span2').on('mouseover',function(){
    $('#speisekarte #circluar-pics .span2').css('background-position', '');

    var position = $(this).css('background-position').split(' ')
    var positionX = parseInt(position[0])
    positionX -= 0;
    $(this).css('background-position', positionX+ 'px -489px')
    var order_number = $(this).index('#speisekarte #circluar-pics .span2') + 1
    $('#speisekarte #speisekarte-titles .span2').css('visibility', 'hidden');
    $('#speisekarte #speisekarte-titles .span2:nth-of-type('+order_number+')').css('visibility', 'visible');
  });

  $('#speisekarte #circluar-pics').on('mouseleave', function(){
    $('#speisekarte #circluar-pics .span2').css('background-position', '');
    $('#speisekarte #speisekarte-titles .span2').css('visibility', 'hidden');
  });



  $('#carousel-navigation #first-paragraph').on('click', function(){
    $("#carousel").fadeOut("slow", 0, function(){
      $("#carousel").fadeIn("slow")
    })
  })

/////////////
//DOWNLOAD MENU
////////////

	$("#menu-download-icon").on('click', function(e){
		   e.preventDefault();
		   window.location.href = 'gm-menu.pdf';
	});

});
