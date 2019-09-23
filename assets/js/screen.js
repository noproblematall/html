$(document).ready(function(){

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};
    // Get the header
    var header = document.getElementById("header");
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    // Add the fixed-top class to the header when you reach its scroll position. Remove "fixed-top" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("fixed-top");
        } else {
            header.classList.remove("fixed-top");
        }
    }

    // -----------------  JS for Manage-account-details -------------------------

    $('.sub-page-navigation-horizontal ul li a').on('click', function(e){
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top-100
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