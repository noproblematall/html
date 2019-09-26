$(document).ready(function(){
    var window_width = $(window).width();
    var submenu_flag = 0;
    var init_hash = location.hash;
    if(init_hash != ''){
        if(init_hash == '#mad-delivery'){
            $('html, body').animate({
                scrollTop: $(init_hash).offset().top-130
            }, 200, function(){

            }); 
        }else{

            $('html, body').animate({
                scrollTop: $(init_hash).offset().top-90
            }, 200, function(){

            });
        }
    }
    setSubmenu();
    var page_name = $('#page_name').val();
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {
        stickNav(); 
        setActive();
        if(window_width < 767){
            $(".submenuResponsive ul li").css('display', 'none');
            $(".submenuResponsive ul li.active").css('display', 'block');
            submenu_flag=0;
        }
    };

    // ------ Video Code ----------

    $('#video_trigger').click(function(){
        $("#video_modal").modal({backdrop: "static"});
    })

    $("#video_modal").on('shown.bs.modal', function(){
        document.getElementById('my_video').play();
    });
    $("#video_modal").on('hidden.bs.modal', function(){
        document.getElementById('my_video').pause();
    });

    // ------------------------------


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
        window_width = $(window).width();
        if ($(window).width() < 767) {            
            $(".sub-page-navigation-horizontal").addClass("submenuResponsive");            
            $(".sub-page-navigation-horizontal ul li").css("display", "none");
            $(".sub-page-navigation-horizontal ul li.active").css("display", "block");
        }
        else
        {
            $(".sub-page-navigation-horizontal").removeClass("submenuResponsive");
            $(".sub-page-navigation-horizontal ul li").css("display", "inline-block");

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

    $('.tooltipa').tooltipster({
        content: $('#tooltip_content'),
        // if you use a single element as content for several tooltips, set this option to true
        contentCloning: false,
        theme: ['tooltipster-shadow', 'tooltipster-shadow-customized']
    });

    // -----------------  JS for Manage-account-details -------------------------

    $('.sub-page-navigation-horizontal ul li a').on('click', function(e){
        if(window_width < 767){
            if (this.hash !== "") {
                e.preventDefault();
                var hash = this.hash;
                if(hash == '#mad-delivery'){
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top-100
                    }, 600, function(){
        
                    }); 
                }else{
    
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top-50
                    }, 600, function(){
        
                    });
                }
                
            }
        }else{
            if (this.hash !== "") {
                e.preventDefault();
                var hash = this.hash;
                if(hash == '#mad-delivery'){
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top-130
                    }, 600, function(){
        
                    }); 
                }else{
    
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top-90
                    }, 600, function(){
        
                    });
                }
                
            }
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
    $('#ftr-open-account-desktop .mad-tab ul li').click(function(){
        $('#ftr-open-account-desktop .mad-tab ul li').removeClass('mad-tab-active');
        $(this).addClass('mad-tab-active');
        let target = $(this).attr('id');
        $('#ftr-open-account-desktop .mad-tab-content').addClass('display-none');
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
        setSubmenu();
    });
    
    $(document).on('click','#mobile-submenu-link',function(){
        if(!submenu_flag){
            $(".submenuResponsive ul li").slideDown();
            submenu_flag=1;
        }else{
            $(".submenuResponsive ul li").slideUp('fast',function () {
                $(".submenuResponsive ul li.active").css('display', 'block');
            });
            submenu_flag=0;
        }
    });    
});