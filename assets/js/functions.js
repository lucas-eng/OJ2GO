//title for section fade in
$(window).scroll(function(){

var wScroll = $(this).scrollTop();

if(wScroll > $('.sectionh3').offset().top - ($(window).height() / 3)) {

  $('.sectionh3').each(function(){

    $('.sectionh3').addClass('is-showing')

  });

}

//h3 fade in

});

$(window).scroll(function(){

var wScroll = $(this).scrollTop();

if(wScroll > $('.sectionh3').offset().top - ($(window).height() / 3)) {

  $('.drinks').each(function(){

    $('.drinks').addClass('is-showing')

  });

}

});
