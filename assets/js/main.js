// var layeranimation = gsap.timeline();
$(document).ready(function () {
  var currentDir = $("body").css("direction");

  // if ($("#scene").length) {
  //   var scene = document.getElementById("scene");
  //   var parallaxInstance = new Parallax(scene);
  // }

  // if ($(".advanges_program_card").length) {
  //   $(".advanges_program_card span.num").counterUp();
  // }

  // if ($(".landing_header_img").length) {
  //   var vector1 = $(".landing_header_img .vector_1"),
  //     vector2 = $(".landing_header_img .vector_2"),
  //     vector3 = $(".landing_header_img .vector_3");

  //   console.log(vector1, vector2, vector3);

  //   layeranimation
  //     .to(vector1, { left: "-60px", duration: 1, ease: "linear" })
  //     .to(
  //       vector2,
  //       { right: "-30px", top: "-80px", duration: 1, ease: "linear" },
  //       "0"
  //     )
  //     .to(
  //       vector3,
  //       {
  //         right: "70px",
  //         bottom: "30px",
  //         duration: 1,
  //         zIndex: 3,
  //         ease: "linear",
  //       },
  //       "0"
  //     );
  //   layeranimation.pause();
  // }
  var selectedCountry = "";
  var selectedKilo = "";
  var kiloresult = "";
  var imageSrc = "";
  var countryName= "";
  var countryCurrency="";
  // const kilogramsInput = document.querySelector("#kilograms");
  const customSelect = document.querySelector(".custom-select");
  const trigger = customSelect.querySelector(".custom-select-trigger");
  const options = customSelect.querySelector(".custom-options");
  const selectedFlag = trigger.querySelector(".selected-flag");
  const triggerText = trigger.querySelector("span");

  trigger.addEventListener("click", function () {
    options.classList.toggle("show");
  });

  options.addEventListener("click", function (e) {
    const option = e.target.closest(".custom-option");
    if (option) {
      const flagSrc = option.dataset.flag;
      const countryText = option.textContent.trim();
      selectedFlag.src = flagSrc;
      imageSrc = flagSrc;
      selectedFlag.style.display = "inline"; // Show the flag
      triggerText.innerHTML = `<img src="${flagSrc}" alt="${countryText}" class="selected-flag"> ${countryText}`;
      options.classList.remove("show");
      document.querySelector(
        ".custom-select-trigger img.selected-flag"
      ).style.display = "inline";
      selectedCountry = option.getAttribute("data-value");
      countryName = option.getAttribute("data-name");
      countryCurrency = option.getAttribute("data-currency");
    }
  });

  document.addEventListener("click", function (e) {
    if (!customSelect.contains(e.target)) {
      options.classList.remove("show");
    }
  });

  document.querySelector("#kilograms").addEventListener("keyup", function (e) {
    const val = parseInt(e.target.value);
    selectedKilo = val;
    if (val <= 0) {
      selectedKilo = val;
    } else {
      selectedKilo = val;
    }
  });

  $("#countrySubmit").on("submit", function (e) {
    e.preventDefault();
    console.log(selectedKilo);
    if (selectedCountry === "moroco") {
      if (selectedKilo == 1) {
        kiloresult = selectedKilo * 180;
      } else if (selectedKilo == 2) {
        kiloresult = selectedKilo * 170;
      } else if (selectedKilo == 3) {
        kiloresult = selectedKilo * 160;
      } else if (selectedKilo == 4) {
        kiloresult = selectedKilo * 160;
      } else if (selectedKilo < 10 && selectedKilo >= 5) {
        kiloresult = selectedKilo * 150;
      } else if (selectedKilo >= 10) {
        kiloresult = selectedKilo * 140;
      }
    }


    if (selectedCountry === "ksa") {
      if (selectedKilo == 1) {
        kiloresult = selectedKilo * 48;
      } else if (selectedKilo == 2) {
        kiloresult = selectedKilo * 47;
      } else if (selectedKilo == 3) {
        kiloresult = selectedKilo * 46;
      } else if (selectedKilo == 4) {
        kiloresult = selectedKilo * 46;
      } else if (selectedKilo < 10 && selectedKilo >= 5) {
        kiloresult = selectedKilo * 38;
      } else if (selectedKilo >= 10 && selectedKilo <= 30) {
        kiloresult = selectedKilo * 22;
      }else if (selectedKilo > 30) {
        kiloresult = selectedKilo * 22;
      }
    }

    // document.querySelector(".result").innerHTML = kiloresult;
    document.querySelector(".modal_result").classList.add("active_modal");
    const modalBox = $(".modal_result .modal_box");
    console.log(imageSrc);
    modalBox.find(".flag_to img").attr("src",imageSrc);
    modalBox.find(".flag_to span").text(`الى ${countryName}`);
    modalBox.find(".unit_weight .weightnum").text(`${selectedKilo} KG`);
    modalBox.find(".total .cname").text(`${kiloresult}`);
    modalBox.find(".total .currency").text(`${countryCurrency}`);
  });

  $(".modal_box .close").on("click", function () {
    document.querySelector(".modal_result").classList.remove("active_modal");
  });

  AOS.init();
});

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  // layeranimation.play();
  // setTimeout(() => {
  //   animateFromLeft();
  // }, 2000);
});
