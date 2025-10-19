package com.example;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

// File: SearchService.java
public class SearchService {

    // Danh sách sản phẩm mẫu (thay thế cho Database thực tế)
    private static final List<Product> database = List.of(
        new Product("PSM001", "Áo Sơ Mi Trắng", 599000),
        new Product("PQA005", "Quần Âu Nano", 890000),
        new Product("PAP010", "Áo Polo Dệt Kim", 450000),
        new Product("PVT003", "Bộ Vest Thanh Lịch", 2990000)
    );

    /**
     * Thực hiện tìm kiếm sản phẩm dựa trên từ khóa.
     * @param keyword Từ khóa tìm kiếm từ người dùng.
     * @return Danh sách sản phẩm khớp.
     */
    public List<Product> searchProducts(String keyword) {
        if (keyword == null || keyword.trim().isEmpty()) {
            return new ArrayList<>(); // Trả về danh sách rỗng nếu từ khóa trống
        }

        String normalizedKeyword = keyword.trim().toLowerCase();

        // Lọc danh sách sản phẩm: dùng Stream API để tìm các sản phẩm có tên chứa từ khóa
        List<Product> results = database.stream()
            .filter(product -> product.getName().toLowerCase().contains(normalizedKeyword))
            .collect(Collectors.toList());

        return results;
    }
    
    // Ví dụ về cách sử dụng (Method main)
    public static void main(String[] args) {
        SearchService service = new SearchService();
        String query = "Áo";
        List<Product> foundProducts = service.searchProducts(query);
        
        System.out.println("Kết quả tìm kiếm cho: " + query);
        for (Product product : foundProducts) {
            System.out.println("- " + product.getName() + " (" + product.getId() + ")");
        }
    }
}