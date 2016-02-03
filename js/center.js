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
        console.log(scrollTop-grid1.height()+"--"+grid1Top)
        if(scrollTop+grid1.height()>grid1Top){
            grid1.find(".boxInfo").addClass("selected");
        }
    }
});