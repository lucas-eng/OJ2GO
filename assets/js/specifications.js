$(window).scroll(function(){

var wScroll = $(this).scrollTop();

if(wScroll > $('.shero').offset().top) {

  $('.title').each(function(){

    $('.title').addClass('is-showing')

  });

}

});

$(window).scroll(function(){

var wScroll = $(this).scrollTop();

if(wScroll > $('.top').offset().top) {

  $('.health').each(function(){

    $('.health').addClass('is-showing')

  });

}

});
