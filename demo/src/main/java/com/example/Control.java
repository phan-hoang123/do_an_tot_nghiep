package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/somi")
    public String somiPage() {
        // Trả về file HTML trong /templates/
        return "somi-ct"; // somi-ct.html
    }
}
