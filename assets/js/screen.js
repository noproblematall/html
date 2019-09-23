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


    // -----------------  JS for Manage-account-details -------------------------
    $('.mad-account-changes .mad-nav ul li').click(function(){
        $('.mad-account-changes .mad-nav ul li').removeClass('mad-active');
        $(this).addClass('mad-active');
        let target = $(this).attr('id');
        $('.mad-account-changes .mad-nav-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    $('.mad-moving-money .mad-nav ul li').click(function(){
        $('.mad-moving-money .mad-nav ul li').removeClass('mad-grey-active');
        $(this).addClass('mad-grey-active');
        let target = $(this).attr('id');
        $('.mad-moving-money .mad-nav-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    $('#mad-transfer-wire-content .mad-tab ul li').click(function(){
        $('#mad-transfer-wire-content .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#mad-transfer-wire-content .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    $('#mad-schwab-accounts-content .mad-tab ul li').click(function(){
        $('#mad-schwab-accounts-content .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#mad-schwab-accounts-content .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    $('#mad-request-check-content .mad-tab ul li').click(function(){
        $('#mad-request-check-content .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#mad-request-check-content .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
});