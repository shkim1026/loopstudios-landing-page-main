// =========================================================================//
// OBJECTS START
// =========================================================================//

const featured = [
    {
        imageMobile: "url(../images/mobile/image-deep-earth.jpg)",
        imageDesktop: "url(../images/desktop/image-deep-earth.jpg)",
        label: "Deep earth"
    },
    {
        imageMobile: "url(../images/mobile/image-night-arcade.jpg)",
        imageDesktop: "url(../images/desktop/image-night-arcade.jpg)",
        label: "Night arcade"
    },
    {
        imageMobile: "url(../images/mobile/image-soccer-team.jpg)",
        imageDesktop: "url(../images/desktop/image-soccer-team.jpg)",
        label: "Soccer team VR"
    },
    {
        imageMobile: "url(../images/mobile/image-grid.jpg)",
        imageDesktop: "url(../images/desktop/image-grid.jpg)",
        label: "The grid"
    },
    {
        imageMobile: "url(../images/mobile/image-from-above.jpg)",
        imageDesktop: "url(../images/desktop/image-from-above.jpg)",
        label: "From up above VR"
    },
    {
        imageMobile: "url(../images/mobile/image-pocket-borealis.jpg)",
        imageDesktop: "url(../images/desktop/image-pocket-borealis.jpg)",
        label: "Pocket Borealis"
    },
    {
        imageMobile: "url(../images/mobile/image-curiosity.jpg)",
        imageDesktop: "url(../images/desktop/image-curiosity.jpg)",
        label: "The curiosity"
    },
    {
        imageMobile: "url(../images/mobile/image-fisheye.jpg)",
        imageDesktop: "url(../images/desktop/image-fisheye.jpg)",
        label: "Make it fisheye"
    }
];
// =========================================================================//
// OBJECTS END
// =========================================================================//

// =========================================================================//
// FUNCTIONS START
// =========================================================================//

function toggleNav() {
    $('.hamburger').toggleClass('display-none');
    $('.close').toggleClass('display-grid');
    $('.navbar').toggleClass('display-grid');
    $('body').toggleClass('overflow-hidden');
}

function displayFeaturedImages() {
    //Displays and styles 'Our creations' images
    for (j = 0; j < featured.length; j++) {
        if ($(window).width() < 768) {
            $(`#img-${j}`).css('background', `linear-gradient(to right, 
                rgba(0, 0, 0, 0.5), 
                rgba(0, 0, 0, 0)),
                ${featured[j].imageMobile}`);
        } else {
            $(`#img-${j}`).css('background', `linear-gradient(to top, 
                rgba(0, 0, 0, 0.5), 
                rgba(0, 0, 0, 0)),
                ${featured[j].imageDesktop}`);
        }
        $(`#img-${j}`).css('background-repeat', 'no-repeat');
        $(`#img-${j}`).css('background-size', 'cover');
    }
    $('#img-0').find('.label').css('width', '6rem');
    $('#img-3').find('.label').css('width', '6rem'); //Adjusts width of label: 'The grid'
}
// =========================================================================//
// FUNCTIONS END
// =========================================================================//

//LOADS THE CORRECT 'INTRO' IMAGE
$(window).on("load resize", function() {
    if ($(window).width() > 768) {
        $('.intro-img').attr('src', 'images/desktop/image-interactive.jpg');
    } else {
        $('.intro-img').attr('src', 'images/mobile/image-interactive.jpg');
    }
});

//POPULATES 'OUR CREATIONS' DIVS AND IMAGES
$(window).on("load", function() {
    let displayDiv = '';
    let imageDiv = '';
    const numberOfImages = $('.img-grid-div').children().length;
    for (i = 0; i < featured.length; i++) {
        imageDiv = `
            <a href="#">
                <div class="img-container" id="img-${i}">
                    <h3 class="label">${featured[i].label}</h3>
                </div>
            </a>
        `;
        displayDiv += imageDiv;
    }
    $('.img-grid-div').html(displayDiv);
    displayFeaturedImages();
});

//ALLOWS 'OUR CREATIONS' IMAGES TO CHANGE ON RESIZE
$(window).on("resize", displayFeaturedImages());

// HAMBURGER SCRIPT START
$('.hamburger').on('click', function() {
    toggleNav();
});

$('.close').on('click', function() {
    toggleNav();
})
// HAMBURGER SCRIPT END
