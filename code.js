var section = $('li');

function toggleAccordion() {
    section.removeClass('active');
    
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('.menu').addClass('menu-bcg');
        $('article').removeClass('max');
        $('article').addClass('min');
        $('#content-2 h2').addClass('d-none');
        $('#content-2 p').removeClass('d-none');


    }

    if ($('article').closest('li').hasClass('active')) {
        $('article').removeClass('min');
        $('article').addClass('max');
        $('.menu').removeClass('menu-bcg');
        $('#content-2 p').addClass('d-none');
        $('#content-2 h2').removeClass('d-none');

    }
}

section.on('click', toggleAccordion);

 $(".main").onepage_scroll({
   sectionContainer: "ul",     
   easing: "ease",                  
   animationTime: 400,            
   pagination: true,                
   loop: false,                     
   keyboard: true,                 
   responsiveFallback: false,        
   direction: "vertical"           
 });
