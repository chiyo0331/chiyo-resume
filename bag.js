  $(document).ready(function() {
      $("#btntop").click(function(e) {
          $("html,body").animate({ scrollTop: 0 }, 1000);
      });
      //alert();
      $(window).scroll(function() {;
          if ($(window).scrollTop() > 660) {
              $("#btntop").fadeIn(1000)
          } else {
              $("#btntop").fadeOut(1000)
          }
      });





      window.onscroll = function() { myFunction() };

      var navbar = document.getElementById("myNavbar");

      var sticky = navbar.offsetTop;

      function myFunction() {
          if (window.pageYOffset > 0) {
              navbar.classList.add("sticky");
          } else {
              navbar.classList.remove("sticky");
          }
      }
  });