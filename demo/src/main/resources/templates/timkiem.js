
    // ----------------------------------------------------
    // GIẢ LẬP KẾT NỐI API ĐẾN JAVA BACKEND
    // ----------------------------------------------------

    /**
     * Hàm này giả lập việc gửi yêu cầu HTTP đến Backend Java
     * Trong thực tế, bạn sẽ dùng fetch() hoặc axios để gọi API thực sự.
     * Ví dụ: fetch('/api/products/search?keyword=' + keyword)
     */
    async function apiSearchProducts(keyword) {
        // Chuyển từ khóa về chữ thường để so sánh (giống logic Java trong Backend)
        const normalizedKeyword = keyword.toLowerCase();

        // Danh sách sản phẩm mẫu (Backend sẽ đọc từ Database)
        const MOCK_PRODUCTS = [
            { name: "Áo Sơ Mi Cotton Trắng", url: "somi-ct.html" },
            { name: "Quần Âu Slimfit Xám", url: "/product/qa002" },
            { name: "Áo Polo Dệt Kim Cao Cấp Navy", url: "/product/polo005" },
            { name: "Áo Sơ Mi Denim Phủi Bụi", url: "/product/sm010" },
            { name: "Giày Tây Da Lộn Màu Nâu", url: "/product/gy003" },
            { name: "Thắt Lưng Da Bò Cao Cấp", url: "/product/tl001" }
        ];

        // Lọc kết quả tìm kiếm (Logic này thường nằm ở Backend)
        const results = MOCK_PRODUCTS.filter(product => {
            return product.name.toLowerCase().includes(normalizedKeyword);
        });

        // Giả lập độ trễ mạng
        await new Promise(resolve => setTimeout(resolve, 300)); 

        // Trả về kết quả JSON (mà Backend Java sẽ trả về)
        return results;
    }


    // ----------------------------------------------------
    // XỬ LÝ SỰ KIỆN TRÊN FRONTEND
    // ----------------------------------------------------

    const searchInput = document.getElementById('product-search-input');
    const resultsList = document.getElementById('search-results-list');
    const searchButton = document.getElementById('search-submit-button');

    // Hàm hiển thị kết quả lên giao diện
    function displayResults(results) {
        resultsList.innerHTML = ''; // Xóa kết quả cũ

        if (results.length === 0) {
            resultsList.innerHTML = '<li class="no-results">Không tìm thấy sản phẩm nào.</li>';
            resultsList.classList.add('visible');
            return;
        }

        results.forEach(product => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${product.url}">${product.name}</a>`;
            
            // Xử lý khi click vào item trong danh sách gợi ý
            listItem.addEventListener('click', () => {
                window.location.href = product.url;
            });
            
            resultsList.appendChild(listItem);
        });

        resultsList.classList.add('visible');
    }

    // Xử lý khi người dùng gõ phím
    searchInput.addEventListener('input', async (e) => {
        const keyword = e.target.value.trim();

        if (keyword.length < 2) {
            resultsList.classList.remove('visible'); // Ẩn nếu từ khóa quá ngắn
            return;
        }

        // 1. Gọi hàm giả lập API Search
        const searchResults = await apiSearchProducts(keyword);
        
        // 2. Hiển thị kết quả
        displayResults(searchResults);
    });
    
    // Xử lý khi nhấn nút Tìm Kiếm (chuyển hướng đến trang kết quả)
    searchButton.addEventListener('click', () => {
        const keyword = searchInput.value.trim();
        if (keyword) {
            // Trong thực tế, chuyển hướng đến trang kết quả tìm kiếm chính thức
            window.location.href = `/search?q=${encodeURIComponent(keyword)}`;
        }
    });

    // Ẩn kết quả khi click ra ngoài
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            resultsList.classList.remove('visible');
        }
    });

