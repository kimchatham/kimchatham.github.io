$(document).ready(function () {
  //Menu button on click event
  $('.mobile-nav-button').on('click', function() { 
    // Toggles a class that slides the menu into view on the screen
    $('.mobile-menu').show('.mobile-menu--open');
    // return false;
  }); 

  //Collapse Nav Bar on Click
        
  $('.navbar-nav>li>a').on('click', function(){
     $('.mobile-menu').hide();
    //  return false;
     
    
     
    
  });
});