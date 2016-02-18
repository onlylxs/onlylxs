var bannerSwiper = new Swiper('#banner-swiper', {
    autoplay: 5000,
    speed: 500,
    loop: true,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    pagination: '.swiper-pagination'
});

$(function () {
    var grid1=$(".content-grid1");
    var grid2=$(".content-grid2");
    var grid3=$(".content-grid3");
    var grid4=$(".content-grid4");
    var grid5=$(".content-grid5");
    var grid1Top=grid1.offset().top;
    var grid2Top=grid2.offset().top;
    var grid3Top=grid3.offset().top;
    var grid4Top=grid4.offset().top;
    var grid5Top=grid5.offset().top;
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop+grid1.height()>grid1Top){
            grid1.find(".boxInfo").addClass("selected");
        }
        if(scrollTop+grid2.height()>grid2Top){
            grid2.find(".col-md-4,.panel-tabContainer").addClass("selected");
        }
        if(scrollTop+grid3.height()>grid3Top){
            grid3.find(".col-lg-6").addClass("selected");
        }
        if(scrollTop+grid4.height()>grid4Top){
            grid4.find(".bottom-grid").addClass("selected");
        }
        if(scrollTop+grid5.height()>grid5Top){
            grid5.addClass("selected");
        }
    };
});