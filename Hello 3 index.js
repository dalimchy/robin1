

// --------Responsive Section----

$('.of').hide();

$('.on').click(function(){
  $('.responsive-menu-item').toggleClass('slide-menu')
  $('.on').hide()
  $('.of').show()
})

$('.of').click(function() {
  $('.responsive-menu-item').toggleClass('slide-menu')
  $('.of').hide()
  $('.on').show()
})


$('.click-menu').click(function(){
  $('.responsive-menu-item').toggleClass('slide-menu')
  $('.of').hide()
  $('.on').show()
})




$('.service-up').hide();
$('.service-dropdown').hide();

$('.service-down').click(function(){
   $('.service-dropdown').slideDown()
   $('.service-down').hide()
   $('.service-up').show()
})

$('.service-up').click(function(){
   $('.service-dropdown').slideUp()
   $('.service-down').show()
   $('.service-up').hide()
})




$('.team-upp').hide();

$('.team-dropdown').hide();

$('.team-downn').click(function(){
   $('.team-dropdown').slideDown()
   $('.team-downn').hide()
   $('.team-upp').show()
})

$('.team-upp').click(function(){
   $('.team-dropdown').slideUp()
   $('.team-downn').show()
   $('.team-upp').hide()
})





// ----------FAQ Section----------

$('#box1').show();
$('.plus1').hide();

$('.minus1').click(function(){
  $('#box1').slideUp()
  $('.minus1').hide()
  $('.plus1').show()
})


$('.plus1').click(function(){
  $('#box1').slideDown();
  $('.minus1').show()
  $('.plus1').hide()
})





$('.minus2').hide();

$('.plus2').click(function(){
  $('#box2').slideDown();
  $('.plus2').hide()
  $('.minus2').show()
})


$('.minus2').click(function(){
  $('#box2').slideUp()
  $('.plus2').show()
  $('.minus2').hide()
})





$('.minus3').hide();

$('.plus3').click(function(){
  $('#box3').slideDown();
  $('.plus3').hide()
  $('.minus3').show()
})


$('.minus3').click(function(){
  $('#box3').slideUp()
  $('.plus3').show()
  $('.minus3').hide()
})





$('.minus4').hide();

$('.plus4').click(function(){
  $('#box4').slideDown();
  $('.plus4').hide()
  $('.minus4').show()
})


$('.minus4').click(function(){
  $('#box4').slideUp()
  $('.plus4').show()
  $('.minus4').hide()
})




// ----------FAQ Closed------------









// ----------Count Section---------


(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};
    
    return $(this).each(function () {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from:            $(this).data('from'),
        to:              $(this).data('to'),
        speed:           $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals:        $(this).data('decimals')
      }, options);
      
      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;
      
      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};
      
      $self.data('countTo', data);
      
      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);
      
      // initialize the element with the starting value
      render(value);
      
      function updateTimer() {
        value += increment;
        loopCount++;
        
        render(value);
        
        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }
        
        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;
          
          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }
      
      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };
  
  $.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };
  
  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  }
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
  var $this = $(this);
  options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  $this.countTo(options);
  }
});


// --------Count Section Closed------------



