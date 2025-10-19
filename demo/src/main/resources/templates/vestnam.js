document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 1. Lấy id nội dung cần hiển thị
            const targetId = this.getAttribute('data-tab');

            // 2. Xóa trạng thái 'active' khỏi tất cả tab header
            tabLinks.forEach(t => t.classList.remove('active'));
            // Thêm trạng thái 'active' cho tab vừa click
            this.classList.add('active');

            // 3. Ẩn tất cả nội dung tab
            tabContents.forEach(content => content.classList.remove('active'));
            // Hiện nội dung tab tương ứng
            document.getElementById(targetId).classList.add('active');
        });
    });
});