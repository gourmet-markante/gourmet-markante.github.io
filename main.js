$(document).ready(function(){

  $('#speisekarte #circluar-pics .span2').on('mouseover',function(){
    $('#speisekarte #circluar-pics .span2').css('background-position', '');

    var position = $(this).css('background-position').split(' ')
    var positionX = parseInt(position[0])
    $(this).css('background-position', positionX+ 'px -489px')
    var order_number = $(this).index('#speisekarte #circluar-pics .span2') + 1
    $('#speisekarte #speisekarte-titles .span2').css('visibility', 'hidden');
    $('#speisekarte #speisekarte-titles .span2:nth-of-type('+order_number+')').css('visibility', 'visible');
  });

  $('#speisekarte #circluar-pics').on('mouseleave', function(){
    $('#speisekarte #circluar-pics .span2').css('background-position', '');
    $('#speisekarte #speisekarte-titles .span2').css('visibility', 'hidden');
  });

//////CAROUSEL

  // $('#carousel-navigation #first-paragraph').on('click', function(){
  //   $("#carousel").fadeOut("slow", 0, function(){
  //     $("#carousel").fadeIn("slow")
  //   })
  // })

var carouselCounter = 0;
setInterval(function(){
    $("#carousel").fadeOut("slow", 0, function(){
      carouselCounter += 1;
      carouselCounter = (carouselCounter % 3);
      $('#carousel').css('background-image', 'url(carousel'+carouselCounter +'.png)');
      $("#carousel").fadeIn("slow")
    })
  },7000)





/////DOWNLOAD MENU


	$("#menu-download-icon").on('click', function(e){
		   e.preventDefault();
		   window.location.href = 'gm-menu.pdf';
	});


/////NAVIGATION CIRCULAR PICS


        $('#speisekarte #circluar-pics div').on('click', function(){
          idOfHeadline = $(this).attr('id').split('-')[0] + "-headline"
          // alert($('#'+idOfHeadline).offset().top)
          $('body').animate({ scrollTop: $('#'+idOfHeadline).offset().top });
        })


/// SOCIAL NETWORKS
  $('#footer .container .span1:nth-of-type(1)').on('click', function(){
    window.open("https://www.facebook.com/pages/Gourmet-Markante/626119437402106")
  });
});
