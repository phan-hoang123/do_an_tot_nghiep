    document.addEventListener('DOMContentLoaded', () => {
        const addToCartBtn = document.querySelector('.buy-btn');

        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', async () => {
                
                // 1. Thu thập dữ liệu cần thiết
                const productId = document.getElementById('product-id-input').value; 
                const quantity = parseInt(document.getElementById('product-quantity').value);
                
                // Kiểm tra dữ liệu hợp lệ
                if (!productId || quantity <= 0) {
                    alert('Vui lòng chọn sản phẩm và số lượng hợp lệ.');
                    return;
                }

                // API Endpoint (Đảm bảo khớp với Controller Java của bạn)
                const CART_API_URL = 'http://localhost:8080/api/cart/add'; 
                
                // Dữ liệu sẽ gửi đi (dạng JSON)
                const cartItemData = {
                    productId: productId,
                    quantity: quantity
                };

                try {
                    // 2. Gửi yêu cầu POST đến Backend Java
                    const response = await fetch(CART_API_URL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            // Thường cần thêm token xác thực nếu người dùng đã đăng nhập
                            // 'Authorization': 'Bearer ' + userToken
                        },
                        body: JSON.stringify(cartItemData) // Chuyển đổi đối tượng JS thành chuỗi JSON
                    });

                    // 3. Xử lý phản hồi từ Backend
                    const responseData = await response.json();
                    
                    if (response.ok) {
                        alert(`Đã thêm ${quantity} sản phẩm (ID: ${productId}) vào giỏ hàng thành công!`);
                        
                        // Cập nhật giao diện giỏ hàng nhỏ (Mini Cart) ở đây
                        // Ví dụ: updateMiniCart(responseData.totalItems); 
                    } else {
                        // Xử lý các lỗi từ phía Backend (ví dụ: hết hàng, ID không hợp lệ)
                        alert(`Thêm vào giỏ thất bại: ${responseData.message || 'Lỗi không xác định'}`);
                    }
                    
                } catch (error) {
                    console.error('Lỗi kết nối hoặc xử lý mạng:', error);
                    alert('Không thể kết nối đến máy chủ. Vui lòng thử lại sau.');
                }
            });
        }
    });
