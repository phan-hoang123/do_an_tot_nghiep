document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab');

            tabLinks.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
        });
    });

    var mainImage = $('#main-product-image');
    if (mainImage.length && $.fn.elevateZoom) {
        mainImage.elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500
        });
    }
});

function changeMainImage(thumbnailElement) {

    var largeSrc = thumbnailElement.getAttribute('data-large-src'); 
    var mainImage = $('#main-product-image');

    if (mainImage.length && $.fn.elevateZoom) {

        var ez = mainImage.data('elevateZoom');
        if (ez) ez.removeZoom();

        mainImage.attr('src', largeSrc);
        mainImage.attr('data-zoom-image', largeSrc);

        mainImage.elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500
        });

        $('.thumbnail-images img').removeClass('selected');
        $(thumbnailElement).addClass('selected');
    }
}
