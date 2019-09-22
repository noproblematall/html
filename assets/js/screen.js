$(document).ready(function(){
    var flag = 1;
    $(window).scroll(function () {
        var temp = $(window).scrollTop();
        if (temp > 63 && flag) {            
            $("#header").addClass("fixed-top");            
            flag = 0;
        }
        else
        {
            
        }
        if (temp < 70 ) {
           
            flag = 1;
            $("#header").removeClass("fixed-top");  
        }
        
        if(temp < 500 )
        {
            
        }       
    });
});