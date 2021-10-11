package ee.mihkel.backend.controller;

import ee.mihkel.backend.model.Category;
import ee.mihkel.backend.service.CategoryService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    CategoryService CategoryService;

    @GetMapping("categories")
    public List<Category> getCategory() {
        return CategoryService.getCategory();
    }

    @PostMapping("categories")
    public String postCategory(@RequestBody Category category) {
        CategoryService.saveCategory(category);
        return "Kategooria edukalt lisatud " + category.getName();
    }

}
