$(document).ready(function() {
   h = $(window).height();
   w = $(window).width();
   $('#dimension').html(w + '/' + h);
});
$(window).resize(function() {
   h = $(window).height();
   w = $(window).width();
   $('#dimension').html(w + '/' + h);
});





$(".video-box-placeholder-image").load(function() {
   video_box_text_placement();
});
$(".map-box-placeholder-image").load(function() {
   map_box_text_placement();
});

$(window).resize(function() {

});


$(document).ready(function() {


   map_box_text_placement();
   video_box_text_placement();
   $('.video-play-button').click(function() {
      $(this).hide();
      $('.video-box-placeholder-image').hide();
      $('.video-text').hide();
      $('.youtube-video').css('display', 'block');
      $('#youtube-video1').attr('src', $('#youtube-video1').attr('src').replace('autoplay=0', '') + 'autoplay=1');

   });

   $('.map-box-placeholder-image').click(function() {
      $(this).hide();
      $('.map-text').hide();
      $('.the-map').css('display', 'block');
   });

   $('.menu-text-label').mouseenter(function() {

      $(this).siblings('.right-menu').stop().css('display', 'block');
      $(this).stop().css('display', 'none');
   });

//$('.menu-text-label').mouseleave(function(){
//   
//   $(this).siblings('.right-menu').stop().css('display','none');
//   $(this).stop().css('display','block');
//});




   $('.right-menu-wrap').mouseenter(function() {
      $('.menu-text-label').stop().css('display', 'none');
      var str = $(this).children('.right-menu').stop().css('display');
      if (str === 'none')
         $(this).children('.right-menu').stop().css('display', 'block');
   });


   $('.right-menu-first-option').click(function() {
      $(this).parent().css('display', 'none');
      $('.menu-text-label').stop().css('display', 'block');
   });



   $('.right-menu-wrap').mouseleave(function() {
      var $this = $(this);
      var str = $this.children('.right-menu').css('display');
      var bool = $('input.right-menu-form').is(':focus');
      if (str === 'block' && !bool) {
         $this.children('.right-menu').stop().css('display', 'none');
         $('.menu-text-label').stop().css('display', 'block');
      }
   });

   $('input.right-menu-form').keydown(function(e) {
      $this = $(this);
      if (e.keyCode === 13) {
//        $('.right-menu').css('display','none');
         $this.parents('.right-menu').stop().css('display', 'none');
         $('.menu-text-label').stop().css('display', 'block');
      }
   });


//preview pan toggle functionality

   $('.preview-button').click(function() {
      $this = $(this);
      var str = $this.parent().siblings('.preview-pan').css('display');
      if (str === 'none') {
         $this.addClass('link-color');
         $this.parents('.generic-post').addClass('generic-post-hover-background-color');
         $this.parents('.generic-post').find('a').addClass('more-grey-text');
         $this.parents('.generic-post').find('.n-e-arrow').addClass('full-opacity');
         $this.parent().siblings('.preview-pan').css('display', 'block');
      }
      else {
         $this.removeClass('link-color');
         $this.parents('.generic-post').removeClass('generic-post-hover-background-color');
         $this.parents('.generic-post').find('a').removeClass('more-grey-text');
         $this.parents('.generic-post').find('.n-e-arrow').removeClass('full-opacity');
         $this.parent().siblings('.preview-pan').css('display', 'none');
      }
   });

//preview pan toggle functionality ends


//comment pan toggle functionality

   $('.comment-action').click(function() {
      $this = $(this);
      var str = $this.parent().parent().siblings('.comment-box').css('display');
      if (str === 'none') {
         $this.addClass('link-color');
         $this.parents('.generic-post').addClass('generic-post-hover-background-color');
         $this.parents('.generic-post').find('a').addClass('more-grey-text');
         $this.parents('.generic-post').find('.n-e-arrow').addClass('full-opacity');
         $this.parent().parent().siblings('.comment-box').css('display', 'block');
      }
      else {
         $this.removeClass('link-color');
         $this.parents('.generic-post').removeClass('generic-post-hover-background-color');
         $this.parents('.generic-post').find('a').removeClass('more-grey-text');
         $this.parents('.generic-post').find('.n-e-arrow').removeClass('full-opacity');
         $this.parent().parent().siblings('.comment-box').css('display', 'none');
      }
   });

//comment pan toggle functionality ends


//new right tiny bar functionality
   $('.right-tiny-bar-new-wrap').mouseenter(function() {
      $(this).children('.right-tiny-bar-new').css('display', 'block');
   });
   $('.right-tiny-bar-new-wrap').mouseleave(function() {
      $(this).children('.right-tiny-bar-new').not('.still-right-bar').css('display', 'none');
   });


   $('.right-tiny-bar-new-wrap').click(function() {
      $this = $(this);
      $child = $this.children('.right-tiny-bar-new');

      var bool = $(this).children('.right-tiny-bar-new').hasClass('still-right-bar');

      if (bool) {
         $child.removeClass('still-right-bar');
         $(this).children('.right-tiny-bar-new').stop().css('display', 'none');

      }
      else {
         $child.addClass('still-right-bar');
         $child.css('display', 'block');
      }


   });

// new right tiny bar functionality ends

//show details functionality

   $('.icon-globe').click(function() {
      $(this).children('.show-details').toggle();
   });

//z-index setting up for .date-info-z-index and .post-footer

   Z_INDEX_FIRST = 9999999;
   Z_INDEX_SECOND = Z_INDEX_FIRST - 1;

   $('.date-info-z-index').each(function() {
      $(this).css('z-index', Z_INDEX_FIRST);
      Z_INDEX_FIRST = Z_INDEX_FIRST - 2;
   });
   $('.post-footer').each(function() {
      $(this).css('z-index', Z_INDEX_SECOND);
      Z_INDEX_SECOND = Z_INDEX_SECOND - 2;
   });





//More menu toggle on click

   $('.more-action').click(function() {
      $(this).next('.more-menu').toggleClass('active');
   });
//More menu toggle on click ends

//read more functionality

   $('.read-more-text-button').click(function() {
      $(this).toggle();
      $(this).siblings('.read-more-text').toggle();
      $(this).siblings('.read-less-button').toggle();

   });

   $('.read-less-button').click(function() {
      $(this).toggle();
      $(this).siblings('.read-more-text').toggle();
      $(this).siblings('.read-more-text-button').toggle();

   });

//Right column functionality

   $(document).ready(function() {
      $('.import-contacts-label').click(function() {
         var str = $(this).parent().siblings('.import-contacts-iconbox').css('display');

         $(this).addClass('label-blue');
         $('.invite-by-email-label').removeClass('label-blue');

         if (str === 'none') {
            $(this).parent().siblings('.import-contacts-iconbox').toggle();
            $(this).parent().siblings('.invite-by-email-box').toggle();
         }
      });
      $('.invite-by-email-label').click(function() {
         var str = $(this).parent().siblings('.invite-by-email-box').css('display');
         $(this).addClass('label-blue');
         $('.import-contacts-label').removeClass('label-blue');
         if (str === 'none') {
            $(this).parent().siblings('.import-contacts-iconbox').toggle();
            $(this).parent().siblings('.invite-by-email-box').toggle();
         }
      });

   });

   $(document).ready(function() {
      $('.top-nav ul.top-nav-items li > span').click(function() {
         $('.top-nav ul.top-nav-items li > span').removeClass('link-color');
         $('.top-nav ul.top-nav-items li > span').removeClass('underline');
         $(this).addClass('link-color');
         $(this).addClass('underline');

      });
      
      $('.top-nav-more-button').click(function(){
         $(this).parent().parent().siblings('.top-nav-more-menu').toggle();
         $('.top-nav-arrow').toggleClass('link-color');
      });
      
      
      //Top nav more menu items functionality
      
      $('#sent-items').click(function(){
         $('.tick').hide();
         $(this).children('.tick').toggle();
         $('.top-nav-more-button').text('Sent-items');
         $('.top-nav-more-menu').toggle();
      });
      $('#draft').click(function(){
         $('.tick').hide();
         $(this).children('.tick').toggle();
         $('.top-nav-more-button').text('Draft');
         $('.top-nav-more-menu').toggle();
      });
      $('#important').click(function(){
         $('.tick').hide();
         $(this).children('.tick').toggle();
         $('.top-nav-more-button').text('#Important');
         $('.top-nav-more-menu').toggle();
      });
      
      $('.top-nav ul.top-nav-items li > span').not('.top-nav-more-button').click(function(){
         $('.top-nav-more-button').text('More');
         $('.tick').hide();
      });
      
   });
   
   $('.top-nav-more-button').mouseenter(function(){
      $('.top-nav-arrow').css('color','#0084B4');
   });
   
   $('.top-nav-more-button').mouseleave(function(){
      $('.top-nav-arrow').css('color','#999999');
   });
   

});



$(document).ready(function() {
   $("[rel='tooltip']").tooltip();
});
//click outside the preview pan closes it
//$(document).mouseup(function (e)
//{
//    var container = $(".preview-pan");
//
//    if ( !container.is(e.target) ) 
//    {
//        container.css('display','none');
//        
//    }
//});

//click outside the menu closes it
$(document).mouseup(function(e)
{
   var container = $(".right-menu");

   if (!container.is(e.target)
           && container.has(e.target).length === 0)
   {
      container.stop().css('display', 'none');
      $('.menu-text-label').stop().css('display', 'block');
   }
});


/*
 *This  two functions gets the width of video box and  the image inside it. then calculates the diffrence of them. them applies left margin to the text of same size
 */

function video_box_text_placement() {

   $('.video-box').each(function() {
      var video_box_width = $('.video-box').width();

      var image_width = $(this).children('.video-box-placeholder-image').width();
      var sub = video_box_width - image_width;
      if (sub > 0) {
         var margin = sub / 2;
         $(this).children('.video-text').width(image_width);
         $(this).children('.video-text').css('margin-left', margin);
      }
//      else if (sub <= 0) {
//         $(this).children('.video-box-placeholder-image').width(video_box_width);
//      }

   });

}
function map_box_text_placement() {

   $('.map-box').each(function() {
      var map_box_width = $('.map-box').width();
      var image_width = $(this).children('.map-box-placeholder-image').width();
      var sub = map_box_width - image_width;
      if (sub > 0) {
         var margin = sub / 2;
         $(this).children('.map-text').width(image_width);
         $(this).children('.map-text').css('margin-left', margin);
      }

   });
}



$(document).ready(function() {

   $('textarea.comment').html('');
   $('textarea.comment').autosize();


});
//$(document).ready(function(){
//    $('textarea').expandingTextarea();
//});

//$('.left-menu-wrap').mouseenter(function(){
//   $('.icon-label').css('display','inline-block');
//});
//$('.left-menu-wrap').mouseleave(function(){
//   $('.icon-label').css('display','none');
//});
