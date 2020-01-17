$(document).ready(function() {
    function scrollToPosition(btn, pos) {

        //   $("#menu1").click(function(e) {

        //       var top = $("#section-1").position().top;

        //       $("html, body").animate({ scrollTop: top }, 300);
        //   });

        $(btn).click(function(e) {

            var Top = $(pos).position().top;

            $("html, body").animate({ scrollTop: Top }, 500);
        });

    }
    scrollToPosition("#menu1", "#section-1");
    scrollToPosition("#menu2", "#section-2");
    scrollToPosition("#menu3", "#section-3");
    scrollToPosition("#menu4", "#section-4");

});