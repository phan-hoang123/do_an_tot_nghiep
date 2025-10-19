document.addEventListener("DOMContentLoaded", function() {
      const addButton = document.querySelector(".buy-btn");
      const quantityInput = document.querySelector(".quantity-input");

      addButton.addEventListener("click", function() {
        const productId = "SP001"; // ID sản phẩm (tùy bạn truyền động hay cứng)
        const quantity = parseInt(quantityInput.value);

        fetch('/api/cart/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            productId: productId,
            quantity: quantity
          })
        })
        .then(res => res.json())
        .then(data => {
          if (data.message) {
            alert("✅ " + data.message);
          } else if (data.error) {
            alert("❌ " + data.error);
          }
        })
        .catch(err => {
          console.error("Lỗi:", err);
          alert("thêm vào giỏ hàng thành công!");
        });
      });
    });

    /**
 * Hàm này thay đổi ảnh chính dựa trên ảnh thumbnail được click
 * và cập nhật hiệu ứng highlight (class="selected") cho thumbnail.
 */
function changeMainImage(thumbnail) {
    // 1. Tìm thẻ ảnh chính bằng ID đã đặt trong HTML
    const mainImage = document.getElementById('main-product-image');
    
    // 2. Lấy đường dẫn ảnh lớn từ thuộc tính data-large-src của ảnh nhỏ
    const newSrc = thumbnail.getAttribute('data-large-src');

    // 3. Cập nhật thuộc tính src của ảnh chính
    if (mainImage && newSrc) {
        mainImage.src = newSrc;
    }

    // 4. Xử lý hiệu ứng highlight (class="selected")
    
    // Bỏ class 'selected' khỏi tất cả ảnh nhỏ trong .thumbnail-images
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    thumbnails.forEach(img => {
        img.classList.remove('selected');
    });

    // Thêm class 'selected' vào ảnh vừa được click
    thumbnail.classList.add('selected');
}