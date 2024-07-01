$(document).ready(function () {

    $(".input_tel").inputmask({"mask": "+7 (999) 999-99-99"});
    $(".input_mail").inputmask("email");

    // window.addEventListener('load', function () {
    //     var preloader = document.getElementById('preloader');
    //     preloader.style.display = 'none';
    // });

    let anketaModalOpenBtn = $(".openModal");
    let inputValues = anketaModalOpenBtn.parent().find("input");
    let modal  = $(".modal");

    anketaModalOpenBtn.on("click", function (e) {
        e.preventDefault();

        inputValues.each(function (inputs) {
            // console.log($(this).val());
            if ($(this).val() === "") {
                modal.removeClass("active");
            } else {
                modal.addClass("active");
            }
        });
    });

    let addressItemTitle = $(".addresses_item--title");
    addressItemTitle.each(function (btn) {
        $(this).on("click", function () {
            $(this).parent().toggleClass("active");
        });
    });

    var swiper = new Swiper(".offers_swiper", {
        slidesPerView: 2.5,
        spaceBetween: 7,
        breakpoints: {
            319: {
                slidesPerView: 2,
            },
            374: {
                slidesPerView: 2.3,
            },
            424: {
                slidesPerView: 2.5,
            }
        },
    });
});