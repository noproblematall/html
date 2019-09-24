$(document).ready(function(){    
    
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {stickNav(); setActive();};
    // Get the header
    var header = document.getElementById("header");
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    // Add the fixed-top class to the header when you reach its scroll position. Remove "fixed-top" when you leave the scroll position
    function stickNav() {
        if (window.pageYOffset > sticky) {
            header.classList.add("fixed-top");
        } else {
            header.classList.remove("fixed-top");
        }
    }
    function setActive() {
        mad_delivery_pos = document.getElementById("mad-delivery").offsetTop; 
        mad_account_changes_pos = document.getElementById("mad-account-changes").offsetTop;
        mad_moving_money = document.getElementById("mad-moving-money").offsetTop;
        mad_online_access = document.getElementById("online-access").offsetTop;
        mad_mobile_app = document.getElementById("mobile-app").offsetTop;
        mad_statment = document.getElementById("mad-statment").offsetTop;       
        if(Math.abs(window.pageYOffset - mad_delivery_pos) <= 70 ){
            $('.sub-page-navigation-horizontal ul li').removeClass('active');
            $('#nav-delivery').addClass('active');            
        }else if(Math.abs(window.pageYOffset - mad_account_changes_pos) <= 70 ){
            $('.sub-page-navigation-horizontal ul li').removeClass('active');
            $('#nav-account-changes').addClass('active');
        }else if(Math.abs(window.pageYOffset - mad_moving_money) <= 70 ){
            $('.sub-page-navigation-horizontal ul li').removeClass('active');
            $('#nav-move-money').addClass('active');
        }else if(Math.abs(window.pageYOffset - mad_online_access) <= 70 ){
            $('.sub-page-navigation-horizontal ul li').removeClass('active');
            $('#nav-online-access').addClass('active');
        }else if(Math.abs(window.pageYOffset - mad_mobile_app) <= 70 ){
            $('.sub-page-navigation-horizontal ul li').removeClass('active');
            $('#nav-mobile-app').addClass('active');
        }else if(Math.abs(window.pageYOffset - mad_statment) <= 70 ){
            $('.sub-page-navigation-horizontal ul li').removeClass('active');
            $('#nav-download-mobile-app').addClass('active');
        }
        
        // console.log(mad_delivery_pos);
    }

    // -----------------  JS for Manage-account-details -------------------------

    $('.sub-page-navigation-horizontal ul li a').on('click', function(e){
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top-130
            }, 800, function(){

            });
            
        }

    })


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