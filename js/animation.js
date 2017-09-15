//sun rotation//
var $sun = $('.sun');
var $win = $(window);

$win.on('scroll',function() {
    var top = $win.scrollTop();
    $sun.css('transform','rotate(' + top/3 + 'deg)');
});
//end of sun rotation//

//waypoint//
var $park = $('.park');

$park.waypoint(function(direction){
    if(direction == 'down'){
        $park.addClass('park-animate');
    }
    else{
        $park.removeClass('park-animate');
    }
},{offset:'50%'});
//end of waypoint//

//fly-in-text//
$(function(){
    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
    }, 500);
})();
