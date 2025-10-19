const slider = document.querySelector('.price-slider');
        const output = document.querySelector('.price-range-value');
        slider.oninput = function() {
            // Định dạng tiền tệ Việt Nam cho đẹp
            output.innerHTML = new Intl.NumberFormat('vi-VN').format(this.value) + '₫';
        }