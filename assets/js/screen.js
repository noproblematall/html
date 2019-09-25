$(document).ready(function(){
    setSubmenu();
    var page_name = $('#page_name').val();
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
    function setSubmenu() {
        if ($(window).width() < 767) {            
            $(".sub-page-navigation-horizontal").addClass("submenuResponsive");
        }
        else
        {
            $(".sub-page-navigation-horizontal").removeClass("submenuResponsive");
        }
    }
    function setActive() {
        if(page_name == 'manage_account_details'){
            mad_delivery_pos = document.getElementById("mad-delivery").offsetTop; 
            mad_account_changes_pos = document.getElementById("mad-account-changes").offsetTop;
            mad_moving_money = document.getElementById("mad-moving-money").offsetTop;
            mad_online_access = document.getElementById("online-access").offsetTop;
            mad_mobile_app = document.getElementById("mobile-app").offsetTop;
            mad_statment = document.getElementById("mad-statment").offsetTop;       
            if(Math.abs(window.pageYOffset - mad_delivery_pos) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-delivery').addClass('active');            
            }else if(Math.abs(window.pageYOffset - mad_account_changes_pos) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-account-changes').addClass('active');
            }else if(Math.abs(window.pageYOffset - mad_moving_money) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-move-money').addClass('active');
            }else if(Math.abs(window.pageYOffset - mad_online_access) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-online-access').addClass('active');
            }else if(Math.abs(window.pageYOffset - mad_mobile_app) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-mobile-app').addClass('active');
            }else if(Math.abs(window.pageYOffset - mad_statment) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-download-mobile-app').addClass('active');
            }
        }else if(page_name == 'get_started'){
            ftr_open_account = document.getElementById("ftr-open-account").offsetTop;
            ftr_transfer_assets = document.getElementById("ftr-transfer-assets").offsetTop;
            ftr_online_access = document.getElementById("online-access").offsetTop;
            ftr_mobile_app = document.getElementById("mobile-app").offsetTop;
            if(Math.abs(window.pageYOffset - ftr_open_account) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-open-account').addClass('active');            
            }else if(Math.abs(window.pageYOffset - ftr_transfer_assets) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-transfer-assets').addClass('active');
            }else if(Math.abs(window.pageYOffset - ftr_online_access) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-signup-online-access').addClass('active');
            }else if(Math.abs(window.pageYOffset - ftr_mobile_app) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-download-mobile-app').addClass('active');
            }
        }else if(page_name == 'schwab_role'){
            ftr_you_advisor_schwab = document.getElementById("ftr-you-advisor-schwab").offsetTop;
            ftr_schwab_protects_assets = document.getElementById("ftr-schwab-protects-assets").offsetTop;
            if(Math.abs(window.pageYOffset - ftr_you_advisor_schwab) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-open-account').addClass('active');            
            }else if(Math.abs(window.pageYOffset - ftr_schwab_protects_assets) <= 150 ){
                $('.sub-page-navigation-horizontal ul li').removeClass('active');
                $('#nav-transfer-assets').addClass('active');
            }
        }
        
    }



    // -----------------  JS for Manage-account-details -------------------------

    $('.sub-page-navigation-horizontal ul li a').on('click', function(e){
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top-90
            }, 800, function(){

            });
            
        }
    })
// Javascript for Desktop ----------------------
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
    $('#mad-deposit-check-content .mad-tab ul li').click(function(){
        $('#mad-deposit-check-content .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#mad-deposit-check-content .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    $('#mad-schwab-moneylink-content .mad-tab ul li').click(function(){
        $('#mad-schwab-moneylink-content .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#mad-schwab-moneylink-content .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    // Javascript for Mobile -----------------------------
    $('#mad-account-changes-mobile .mad_accordian .mad_custom_button a').click(function(){
        $('#mad-account-changes-mobile .mad_accordian .mad_custom_button a').removeClass('mad-active');
        $(this).addClass('mad-active');
    })
    $('#mad-moving-money-mobile .mad_accordian .mad_custom_button a').click(function(){
        $('#mad-moving-money-mobile .mad_accordian .mad_custom_button a').removeClass('mad-grey-active');
        $(this).addClass('mad-grey-active');
    })
    $('#mad-transfer-wire-mobile-content .mad-tab ul li').click(function(){
        $('#mad-transfer-wire-mobile-content .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#mad-transfer-wire-mobile-content .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    $('#mad-schwab-accounts-mobile-content .mad-tab ul li').click(function(){
        $('#mad-schwab-accounts-mobile-content .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#mad-schwab-accounts-mobile-content .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    $('#mad-request-check-mobile-content .mad-tab ul li').click(function(){
        $('#mad-request-check-mobile-content .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#mad-request-check-mobile-content .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    $('#mad-deposit-check-mobile-content .mad-tab ul li').click(function(){
        $('#mad-deposit-check-mobile-content .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#mad-deposit-check-mobile-content .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    $('#mad-schwab-moneylink-mobile-content .mad-tab ul li').click(function(){
        $('#mad-schwab-moneylink-mobile-content .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#mad-schwab-moneylink-mobile-content .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    



    // ---------- Get Started ------------------------------
    $('#ftr-open-account .mad-tab ul li').click(function(){
        $('#ftr-open-account .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#ftr-open-account .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    $('#ftr-open-account-mobile .mad-tab ul li').click(function(){
        $('#ftr-open-account-mobile .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#ftr-open-account-mobile .mad-tab-content').addClass('display-none');
        $('#'+target+'-content').removeClass('display-none');
    })
    // ----------------------------------------- sub_menu --------------------------------------------

    $( window ).resize(function() {
        if ($(window).width() < 767) {            
            $(".sub-page-navigation-horizontal").addClass("submenuResponsive");
        }
        else
        {
            $(".sub-page-navigation-horizontal").removeClass("submenuResponsive");
        }
    });
    $(document).on('click','.submenuResponsive ul li',function(){
        $(".submenuResponsive ul li").slideDown();
    });    
});