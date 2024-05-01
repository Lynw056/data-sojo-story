
  /*//////////////////////
	*
	* SCROLLMAGIC STARTS
	*
	*//////////////////////
	// init controller
	var controller = new ScrollMagic.Controller();

 //flow
  $(".flow").each(function(){
    $(this).addClass('out');
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0,
      duration: 600
    })
    .on("enter", function(ev){$(ev.target.triggerElement()).removeClass('out');})
    .on("leave", function(ev){$(ev.target.triggerElement()).addClass('out');})
    .addTo(controller);
  });

  var counter = 0, // to keep track of current slide
    $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

//slideshow
var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);
  $items.removeClass('show'); 
  $items.eq(itemToShow).addClass('show');    
};

$('.next').on('click', function(){
    counter++;
    showCurrent(); 
});
$('.prev').on('click', function(){
    counter--;
    showCurrent(); 
});

if('ontouchstart' in window){
  $('.diy-slideshow').swipe({
    swipeLeft:function() {
      counter++;
      showCurrent(); 
    },
    swipeRight:function() {
      counter--;
      showCurrent(); 
    }
  });
}

//button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

 //fade
  $(".fade").each(function(){
    $(this).addClass('out');
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.65
    })
    .on("enter", function(ev){$(ev.target.triggerElement()).removeClass('out');})
    .on("leave", function(ev){$(ev.target.triggerElement()).addClass('out');})
    .addTo(controller);
  });

$('.container').removeClass('out');
