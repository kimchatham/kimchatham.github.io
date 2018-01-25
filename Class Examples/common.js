//Returns diagonal distance given the left 
//position differece and the top position difference
//ex: var distance = pythagorean(5, 2);
function pythagorean(sideA, sideB){
    var sideCSquared = sideA * sideA + sideB * sideB;
    var sideC = Math.sqrt(sideCSquared);
    return sideC;
}

//Returns a random number from first parameter and second parameter
//ex: var number = randomNumber(0, 255);
function randomNumber(start, end){
    //figure out range of start to end
    var range = Math.abs(end-start);
    //run code to generate random number
    var answer = parseInt(Math.random() * range + start);
    //return random number
    return answer;
}

//Returns a random color in the format "rgb(###, ###, ###)"
function randomColor(){
    //random number from 0-255
        //red
        //green
        //blue
    var red = randomNumber(0, 255);
    var green = randomNumber(0, 255);
    var blue = randomNumber(0, 255);
    //build css value to return: "rgb(##, ##, ##)"
    return "rgb("+red+", "+green+", "+blue+")";
}

//Rainbow action in jQuery, randomly changes background and text color
//ex:   $("selector").rainbow();
$.fn.rainbow = function(){
    $(this).each(function(){
        $(this).css({
            "background-color": randomColor(),
            "color": randomColor()
        });
    });
    return this;
};

//RandomPosition action in jQuery, randomly places elements 
//on the page. Keeping them on screen
//ex:   $("selector").randomPosition();
//ex:   $("selector").randomPosition({
//          slide: false,
//          position: "relative"
//      })
$.fn.randomPosition = function(options){
    $(this).each(function(){
        options = $.extend({
            slide: true,
            position: "absolute"
        }, options);
        
        var topDiff = 0;
        var leftDiff = 0;
        
        if(options.slide){
            $(this).css("transition", "1s");
        }
        if(options.position == "absolute"){
            $(this).css("position", "absolute").css("top", "0").css("left", "0");
        }else if(options.position == "relative"){
            $(this).css("position", "relative").css("top", "0").css("left", "0");
            var position = $(this).position();
            if($(this).data("originalTop") === undefined){
                $(this).data("originalTop", position.top);
                $(this).data("originalLeft", position.left);
            }
            if($(this).data("originalTop") !== undefined){
                topDiff = $(this).data("originalTop");
            }
            if($(this).data("originalLeft") !== undefined){
                leftDiff = $(this).data("originalLeft");
            }
        }
        
        var maxLeft = $("html").width() - $(this).width();
        var newLeft = randomNumber(0, maxLeft-leftDiff);
        $(this).css("left", newLeft);

        var maxTop = $(document).height() - $(this).height();
        var newTop = randomNumber(0, maxTop-topDiff);
        $(this).css("top", newTop);
    });
    return this;
};


//Starting point for any jQuery plugins/new actions
$.fn.pluginTemplate = function(options){
    //default options
    options = $.extend({
        property: "value",
        property2: "value2"
    }, options);
    $(this).each(function(){
        //Code for each element goes here
        $(this).css("background-color", "red");
    });
    //so actions can be chained
    return this;
};

            