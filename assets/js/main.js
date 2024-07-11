var layeranimation = gsap.timeline();
$(document).ready(function () {
  var currentDir = $("body").css("direction");

  if ($("#scene").length) {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  }

  if ($(".advanges_program_card").length) {
    $(".advanges_program_card span.num").counterUp();
  }

  if ($(".landing_header_img").length) {
    var vector1 = $(".landing_header_img .vector_1"),
      vector2 = $(".landing_header_img .vector_2"),
      vector3 = $(".landing_header_img .vector_3");

    console.log(vector1, vector2, vector3);

    layeranimation
      .to(vector1, { left: "-60px", duration: 1, ease: "linear" })
      .to(
        vector2,
        { right: "-30px", top: "-80px", duration: 1, ease: "linear" },
        "0"
      )
      .to(
        vector3,
        {
          right: "70px",
          bottom: "30px",
          duration: 1,
          zIndex: 3,
          ease: "linear",
        },
        "0"
      );
    layeranimation.pause();
  }

  AOS.init();
});

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  layeranimation.play();
  // setTimeout(() => {
  //   animateFromLeft();
  // }, 2000);
});
