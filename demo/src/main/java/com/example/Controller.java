// File: CartController.java (Tầng Controller)

@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService; // Tiêm CartService

    // Constructor Injection
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    // API Endpoint: POST http://localhost:8080/api/cart/add
    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestBody AddToCartRequest request) {
        
        try {
            // 1. Gọi Service để xử lý logic thêm vào giỏ
            // Trong thực tế, bạn sẽ cần cả ID của người dùng (từ token xác thực)
            String userId = "current_user_id"; // Giả định lấy ID người dùng
            
            // 2. Service thực hiện: kiểm tra tồn kho, thêm/cập nhật giỏ hàng trong Database
            cartService.addItemToCart(userId, request.getProductId(), request.getQuantity());
            
            // 3. Trả về phản hồi thành công (HTTP 200 OK)
            // Bạn có thể trả về thông tin giỏ hàng mới nhất
            return ResponseEntity.ok(Map.of("message", "Item added successfully", "totalItems", 5)); 

        } catch (InventoryException e) {
            // 4. Xử lý lỗi nghiệp vụ (ví dụ: hết hàng)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body(Map.of("message", e.getMessage()));
                                 
        } catch (Exception e) {
            // 5. Xử lý lỗi hệ thống
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(Map.of("message", "Lỗi hệ thống khi thêm vào giỏ."));
        }
    }
}