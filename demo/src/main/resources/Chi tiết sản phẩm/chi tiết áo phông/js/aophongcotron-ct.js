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

    // ✅ THÊM PHẦN NÀY NGAY SAU KHI KHỞI TẠO TABLINKS
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

// ===============================
// ✅ HÀM NÀY ĐẶT SAU KHỐI TRÊN (ngoài event DOMContentLoaded)
// ===============================
function changeMainImage(thumbnailElement) {
    // 👉 DÒNG NÀY chính là chỗ bạn hỏi “thêm vào đâu”
    // Chính là ở ĐẦU HÀM, như dưới đây 👇

    var largeSrc = thumbnailElement.getAttribute('data-large-src'); // ✅ lấy link ảnh lớn
    var mainImage = $('#main-product-image');

    if (mainImage.length && $.fn.elevateZoom) {

        // 1. Gỡ zoom cũ
        var ez = mainImage.data('elevateZoom');
        if (ez) ez.removeZoom();

        // 2. Đổi ảnh
        mainImage.attr('src', largeSrc);
        mainImage.attr('data-zoom-image', largeSrc);

        // 3. Tạo zoom mới
        mainImage.elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500
        });

        // 4. Cập nhật ảnh được chọn
        $('.thumbnail-images img').removeClass('selected');
        $(thumbnailElement).addClass('selected');
    }
}
