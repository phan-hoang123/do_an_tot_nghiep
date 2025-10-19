// File: Product.java (Model)
public class Product {
    private String id;
    private String name;
    private double price;

    // Constructor
    public Product(String id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Getters and Setters (được lược bỏ để đơn giản)
    public String getName() {
        return name;
    }
    // ...
}