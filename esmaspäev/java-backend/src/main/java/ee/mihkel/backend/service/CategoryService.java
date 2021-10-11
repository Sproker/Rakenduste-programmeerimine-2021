package ee.mihkel.backend.service;

import ee.mihkel.backend.model.Category;
import ee.mihkel.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository CategoryRepository;

    public List<Category> getCategory() {
        return CategoryRepository.findAll();
    }

    public void saveCategory(Category category) {
        CategoryRepository.save(category);
    }
}
