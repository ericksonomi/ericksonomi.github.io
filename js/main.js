// (function ($) {
//     "use strict";

//     // Spinner
//     var spinner = function () {
//         setTimeout(function () {
//             if ($('#spinner').length > 0) {
//                 $('#spinner').removeClass('show');
//             }
//         }, 1);
//     };
//     spinner(0);
    
    
//     // Initiate the wowjs
//     new WOW().init();


//     // Sticky Navbar
//     $(window).scroll(function () {
//         if ($(window).width() > 992) {
//             if ($(this).scrollTop() > 45) {
//                 $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
//             } else {
//                 $('.sticky-top .container').removeClass('shadow-sm').css('max-width', $('.topbar .container').width());
//             }
//         } else {
//             $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
//         }
//     });


//     // Hero Header carousel
//     $(".header-carousel").owlCarousel({
//         items: 1,
//         autoplay: true,
//         smartSpeed: 2000,
//         center: false,
//         dots: false,
//         loop: true,
//         margin: 0,
//         nav : true,
//         navText : [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>'
//         ]
//     });



//     // Project carousel
//     $(".project-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1000,
//         center: false,
//         dots: true,
//         loop: true,
//         margin: 25,
//         nav : false,
//         navText : [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>'
//         ],
//         responsiveClass: true,
//         responsive: {
//             0:{
//                 items:1
//             },
//             576:{
//                 items:1
//             },
//             768:{
//                 items:2
//             },
//             992:{
//                 items:2
//             },
//             1200:{
//                 items:2
//             }
//         }
//     });

//     // testimonial carousel
//     $(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1500,
//         center: false,
//         dots: true,
//         loop: true,
//         margin: 25,
//         nav : false,
//         navText : [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>'
//         ],
//         responsiveClass: true,
//         responsive: {
//             0:{
//                 items:1
//             },
//             576:{
//                 items:1
//             },
//             768:{
//                 items:2
//             },
//             992:{
//                 items:2
//             },
//             1200:{
//                 items:2
//             }
//         }
//     });


//     // Facts counter
//     $('[data-toggle="counter-up"]').counterUp({
//         delay: 5,
//         time: 2000
//     });


    
//    // Back to top button
//    $(window).scroll(function () {
//     if ($(this).scrollTop() > 300) {
//         $('.back-to-top').fadeIn('slow');
//     } else {
//         $('.back-to-top').fadeOut('slow');
//     }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//         return false;
//     });


// })(jQuery);

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(8($){"1n 1m";1l f=8(){1k(8(){d($(\'#f\').1j>0){$(\'#f\').R(\'1i\')}},1)};f(0);1h 1g().1f();$(l).H(8(){d($(l).c()>m){d($(G).g()>1e){$(\'.D-9 .e\').Q(\'C-B\').A(\'z-c\',\'P%\')}k{$(\'.D-9 .e\').R(\'C-B\').A(\'z-c\',$(\'.1d .e\').c())}}k{$(\'.D-9 .e\').Q(\'C-B\').A(\'z-c\',\'P%\')}});$(".1c-y").x({4:1,w:6,v:I,u:7,t:7,s:6,r:0,q:6,p:[\'<i b="3 3-a-o"></i>\',\'<i b="3 3-a-n"></i>\']});$(".1b-y").x({w:6,v:1a,u:7,t:6,s:6,r:O,q:7,p:[\'<i b="3 3-a-o"></i>\',\'<i b="3 3-a-n"></i>\'],N:6,M:{0:{4:1},L:{4:1},K:{4:2},m:{4:2},J:{4:2}}});$(".19-y").x({w:6,v:E,u:7,t:6,s:6,r:O,q:7,p:[\'<i b="3 3-a-o"></i>\',\'<i b="3 3-a-n"></i>\'],N:6,M:{0:{4:1},L:{4:1},K:{4:2},m:{4:2},J:{4:2}}});$(\'[18-17="16-15"]\').14({13:5,12:I});$(l).H(8(){d($(G).g()>11){$(\'.j-h-9\').10(\'F\')}k{$(\'.j-h-9\').Z(\'F\')}});$(\'.j-h-9\').Y(8(){$(\'X, W\').V({g:0},E,\'U\');T 7})})(S);',62,86,'|||bi|items||true|false|function|top|arrow|class|width|if|container|spinner|scrollTop|to||back|else|window|992|right|left|navText|nav|margin|loop|dots|center|smartSpeed|autoplay|owlCarousel|carousel|max|css|sm|shadow|sticky|1500|slow|this|scroll|2000|1200|768|576|responsive|responsiveClass|25|100|addClass|removeClass|jQuery|return|easeInOutExpo|animate|body|html|click|fadeOut|fadeIn|300|time|delay|counterUp|up|counter|toggle|data|testimonial|1000|project|header|topbar|45|init|WOW|new|show|length|setTimeout|var|strict|use'.split('|'),0,{}))
