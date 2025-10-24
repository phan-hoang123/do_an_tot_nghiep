CREATE DATABASE ClothingStore;
USE ClothingStore;
GO


CREATE TABLE NguoiDung (
    maNguoiDung INT PRIMARY KEY IDENTITY(1,1),
    tenDangNhap VARCHAR(50) UNIQUE NOT NULL,
    matKhau VARCHAR(100) NOT NULL,
    hoTen VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    soDienThoai VARCHAR(15),
    vaiTro VARCHAR(20) CHECK (vaiTro IN ('KHACHHANG','QUANTRI')) DEFAULT 'KHACHHANG',
    ngayTao DATETIME DEFAULT GETDATE()
);

CREATE TABLE DiaChi (
    maDiaChi INT PRIMARY KEY IDENTITY(1,1),
    maNguoiDung INT,
    diaChi VARCHAR(255),
    macDinh BIT DEFAULT 0,
    FOREIGN KEY (maNguoiDung) REFERENCES NguoiDung(maNguoiDung)
);

CREATE TABLE DanhMuc (
    maDanhMuc INT PRIMARY KEY IDENTITY(1,1),
    tenDanhMuc VARCHAR(100) NOT NULL
);
 
CREATE TABLE SanPham (
    maSanPham INT PRIMARY KEY IDENTITY(1,1),
    tenSanPham VARCHAR(200) NOT NULL,
    moTa VARCHAR(255),
    gia DECIMAL(10,2) NOT NULL,
    soLuongTon INT DEFAULT 0,
    maDanhMuc INT,
    hinhAnh VARCHAR(255),
    ngayThem DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (maDanhMuc) REFERENCES DanhMuc(maDanhMuc)
);

CREATE TABLE ThuocTinhSanPham (
    maThuocTinh INT PRIMARY KEY IDENTITY(1,1),
    maSanPham INT,
    kichCo VARCHAR(50),
    mauSac VARCHAR(50),
    soLuong INT DEFAULT 0,
    FOREIGN KEY (maSanPham) REFERENCES SanPham(maSanPham)
);

CREATE TABLE DonHang (
    maDonHang INT PRIMARY KEY IDENTITY(1,1),
    maNguoiDung INT,
    maDiaChi INT,
    ngayDat DATETIME DEFAULT GETDATE(),
    trangThai VARCHAR(20) CHECK (trangThai IN ('CHOXACNHAN','DAXACNHAN','DANGGIAO','DAGIAO','DAHUY')) DEFAULT 'CHOXACNHAN',
    tongTien DECIMAL(10,2),
    FOREIGN KEY (maNguoiDung) REFERENCES NguoiDung(maNguoiDung),
    FOREIGN KEY (maDiaChi) REFERENCES DiaChi(maDiaChi)
);

CREATE TABLE ChiTietDonHang (
    maChiTiet INT PRIMARY KEY IDENTITY(1,1),
    maDonHang INT,
    maSanPham INT,
    soLuong INT NOT NULL,
    gia DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (maDonHang) REFERENCES DonHang(maDonHang),
    FOREIGN KEY (maSanPham) REFERENCES SanPham(maSanPham)
);

CREATE TABLE ThanhToan (
    maThanhToan INT PRIMARY KEY IDENTITY(1,1),
    maDonHang INT,
    phuongThuc VARCHAR(50), 
    trangThai VARCHAR(50) DEFAULT N'Chưa thanh toán',
    ngayThanhToan DATETIME,
    FOREIGN KEY (maDonHang) REFERENCES DonHang(maDonHang)
);

CREATE TABLE VanChuyen (
    maVanChuyen INT PRIMARY KEY IDENTITY(1,1),
    maDonHang INT,
    donViVC VARCHAR(100), 
    trangThaiVC VARCHAR(100) DEFAULT N'Đang chuẩn bị',
    ngayGiaoDuKien DATETIME,
    ngayGiaoThucTe DATETIME,
    FOREIGN KEY (maDonHang) REFERENCES DonHang(maDonHang)
);

CREATE TABLE DanhGia (
    maDanhGia INT PRIMARY KEY IDENTITY(1,1),
    maNguoiDung INT,
    maSanPham INT,
    soSao INT CHECK (soSao BETWEEN 1 AND 5),
    binhLuan VARCHAR(255),
    ngayDanhGia DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (maNguoiDung) REFERENCES NguoiDung(maNguoiDung),
    FOREIGN KEY (maSanPham) REFERENCES SanPham(maSanPham)
);

CREATE TABLE GioHang (
    maGioHang INT PRIMARY KEY IDENTITY(1,1),
    maNguoiDung INT,
    maSanPham INT,
    soLuong INT DEFAULT 1,
    FOREIGN KEY (maNguoiDung) REFERENCES NguoiDung(maNguoiDung),
    FOREIGN KEY (maSanPham) REFERENCES SanPham(maSanPham)
);
GO

