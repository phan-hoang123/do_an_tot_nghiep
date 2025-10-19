    document.addEventListener('DOMContentLoaded', () => {
        const quantitySelector = document.querySelector('.quantity-selector');
        const quantityInput = document.getElementById('product-quantity');
        
        if (quantitySelector && quantityInput) {
            quantitySelector.addEventListener('click', (event) => {
                const target = event.target;
                
                // Chỉ xử lý khi click vào nút tăng/giảm
                if (target.classList.contains('quantity-btn')) {
                    
                    let currentValue = parseInt(quantityInput.value);
                    const action = target.getAttribute('data-action');
                    const min = parseInt(quantityInput.getAttribute('min'));
                    const max = parseInt(quantityInput.getAttribute('max'));

                    if (action === 'minus') {
                        // Giảm số lượng, nhưng không được nhỏ hơn giá trị min
                        if (currentValue > min) {
                            quantityInput.value = currentValue - 1;
                        }
                    } else if (action === 'plus') {
                        // Tăng số lượng, nhưng không được lớn hơn giá trị max
                        if (currentValue < max) {
                            quantityInput.value = currentValue + 1;
                        }
                    }
                }
            });
            
            // Xử lý khi người dùng nhập tay vào ô input (để đảm bảo không vượt min/max)
            quantityInput.addEventListener('change', () => {
                let currentValue = parseInt(quantityInput.value);
                const min = parseInt(quantityInput.getAttribute('min'));
                const max = parseInt(quantityInput.getAttribute('max'));
                
                if (isNaN(currentValue) || currentValue < min) {
                    quantityInput.value = min;
                } else if (currentValue > max) {
                    quantityInput.value = max;
                }
            });
        }
    });