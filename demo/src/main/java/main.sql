-- Dữ liệu mẫu cho bảng NguoiDung (Phải có trước)
INSERT INTO NguoiDung (tenDangNhap, matKhau, hoTen, email, soDienThoai, vaiTro, ngayTao)
VALUES 
('Phanhoang2010', 'phanhoangg2010', N'Phan Duy Hoàng', 'phanhoang2010@gmail.com', '0333041030', N'QUANTRI', '03/09/2025' ),
('Caoduong031', 'duongcao123@', N'Cao Thái Dương', 'caoduong1234@gmail.com', '0325858935', N'KHACHHANG', '04/10/2025'),
('PhanNam77123', 'phannam77213', N'Phan Văn Nam', 'pnam772133@gmail.com', '0345382013', N'KHACHHANG', '02/08/2025');
GO
SELECT * FROM NguoiDung

-- Dữ liệu mẫu cho bảng SanPham (Phải có trước)
INSERT INTO SanPham (tenSanPham, moTa, gia, soLuongTon, hinhAnh, ngayThem)
VALUES
(N'Áo thun nam', N'Chất liệu co giãn, mát', '599.000', 3, 'Anh1', '03/09/2025'),
(N'Váy công sở', N'100% cotton', '350.000', 1, 'Anh2', '02/10/2025'),
(N'Quần đùi nam', N'Chất liệu co giãn 3 chiều', '200.000', 2, 'Anh3', '04/08/2025');
GO
SELECT * FROM SanPham

-- Dữ liệu mẫu cho bảng ThanhToan (Dựa vào NguoiDung)
-- Giả sử maNguoiDung = 1, 2, 3 đã được thêm tự động (IDENTITY)
INSERT INTO ThanhToan (maDonHang, phuongThuc, trangThai, ngayThanhToan)
VALUES
('2025470241', N'chuyển khoản', N'Đã trả tiền', '2025-10-10'),
('2025437201',  N'tiền mặt', N'Đã thanh toán', '2025-10-14'),
('2025585932',  N'tiền mặt', N'Đã thanh toán', '2025-10-15');
GO

-- Dữ liệu mẫu cho bảng DonHang (Dựa vào NguoiDung)
-- Giả sử maNguoiDung = 1, 2
INSERT INTO DonHang (maNguoiDung, maDiaChi, trangThai, tongTien)
VALUES
(1, 1, '02/05/2025', 'DAXACNHAN',  65000),
(2, 2,'04/06/2025', 'DAXACNHAN',  50000),
(3, 3, '01/12/2025', 'DAGIAO',  40000);
GO
SELECT * FROM DonHang

-- Dữ liệu mẫu cho bảng ChiTietDonHang (Dựa vào DonHang và SanPham)
-- Giả sử maDH = 1, maSP = 1, 2
INSERT INTO ChiTietDonHang (maDH, maSP, soLuong, donGia)
VALUES
(1, 1, 2, 150000), -- 2 * Áo thun (150k)
(1, 2, 1, 350000); -- 1 * Quần jean (350k)
-- Giả sử maDH = 2, maSP = 3
INSERT INTO ChiTietDonHang (maDH, maSP, soLuong, donGia)
VALUES
(2, 3, 1, 500000); -- 1 * Váy đầm (500k)
GO

-- Dữ liệu mẫu cho bảng DanhGia (Dựa vào NguoiDung và SanPham)
-- Giả sử maNguoiDung = 2, maSP = 3
INSERT INTO DanhGia (maNguoiDung, maSP, soSao, binhLuan)
VALUES
(2, 3, 5, N'Sản phẩm đẹp, giao hàng nhanh.');
GO

-- Dữ liệu mẫu cho bảng GiaoHang (Dựa vào NguoiDung và SanPham)
-- Giả sử maNguoiDung = 1, maSP = 1
INSERT INTO GiaoHang (maNguoiDung, maSP, soLuong)
VALUES
(1, 1, 2);
GO

-- Cập nhật giá sản phẩm "Áo thun nam"
UPDATE SanPham
SET gia = 160000, soLuongTon = 95
WHERE maSP = 1; -- Giả sử maSP = 1 là Áo thun nam
GO

-- Cập nhật phương thức thanh toán cho Người dùng C
UPDATE NguoiDung
SET truongThai = N'đã thanh toán'
WHERE maNguoiDung = 3; -- Giả sử maNguoiDung = 3 là Lê Văn C
GO

-- Cập nhật sao đánh giá
UPDATE DanhGia
SET soSao = 4, binhLuan = N'Sản phẩm tốt, nhưng giao hơi chậm.'
WHERE maDanhGia = 1; -- Giả sử maDanhGia = 1
GO

-- Xóa chi tiết đơn hàng (giả sử có 2 chi tiết cho Đơn hàng 1)
DELETE FROM ChiTietDonHang
WHERE maDH = 1;
GO

-- Xóa Đơn hàng 1 (Sau khi xóa hết chi tiết của nó)
DELETE FROM DonHang
WHERE maDH = 1;
GO

-- Xóa sản phẩm 'Váy đầm công sở' (giả sử maSP = 3)
-- Lưu ý: Nếu có dữ liệu liên quan ở GiaoHang hoặc DanhGia, bạn cần xóa ở đó trước.
DELETE FROM DanhGia WHERE maSP = 3;
DELETE FROM GiaoHang WHERE maSP = 3; 

DELETE FROM SanPham
WHERE maSP = 3;
GO