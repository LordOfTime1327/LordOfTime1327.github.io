$('.worksSlider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    cssEase: 'ease-in-out',
    centerMode: true,
    dots: true,
    pauseOnDotsHover: true,
    lazyLoad: 'progressive',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                infinite:true,
                arrows: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                arrows: false
            }
        }
    ]
});

$('.teamSlider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    slidesToShow: 3,
    rows: 1,
    responsive: [
        {
         breakpoint: 1024,
         settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
             infinite:true,
             arrows: false
         }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        }
    ]
});

    $(function() {

        $('.up').click(function() {
            $('html, body').animate({scrollTop: 0},500);
            return false;
        })
    });

function initMap() {
    var uluru = {lat: 46.461175, lng: 30.750824};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        styles: [
            {
                featureType: "all",
                "stylers": [
                    { "saturation": -50},
                    { "lightness": -20 },
                ]
            }
        ],
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });}