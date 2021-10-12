$(document). ready(function() {
    $('.slider'). slick({
        slidesToShow: 4,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});