//Collapse Nav Bar on Click
        
        $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        });
        
//Display Email Contact on Click
        
          function emailFunction() {
            var x = document.getElementById("contactMe");
                if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
        

