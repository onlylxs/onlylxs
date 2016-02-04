var bannerSwiper = new Swiper('#banner-swiper', {
    autoplay: 5000,
    speed: 500,
    loop: true,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    pagination: '.swiper-pagination'
});

$(function () {
    var grid1=$(".content-grid");
    var grid2=$(".articleList");
    var grid3=$(".semi-background");
    var grid4=$(".gallery-grid");
    var grid5=$(".content-grid2");
    var grid1Top=grid1.offset().top;
    var grid2Top=grid2.offset().top;
    var grid3Top=grid3.offset().top;
    var grid4Top=grid4.offset().top;
    var grid5Top=grid5.offset().top;
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop+300>grid1Top){
            grid1.find(".boxInfo").addClass("selected");
        }
        if(scrollTop+300>grid2Top){
            grid2.find(".col-md-4,.panel-tabContainer").addClass("selected");
        }
        if(scrollTop+300>grid3Top){
            grid3.find(".col-lg-6").addClass("selected");
        }
        if(scrollTop+300>grid4Top){
            grid4.find(".bottom-grid").addClass("selected");
        }
    };
});