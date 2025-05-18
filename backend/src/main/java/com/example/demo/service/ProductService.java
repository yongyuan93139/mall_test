package com.example.demo.service;

import com.example.demo.entity.Product;
import com.example.demo.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProductService {

    @Autowired
    private ProductMapper productMapper;

    public Map<String, Object> getProducts(int page, int size) {
        int offset = (page - 1) * size;
        List<Product> products = productMapper.findAll(offset, size);
        int total = productMapper.count();
        
        Map<String, Object> result = new HashMap<>();
        result.put("products", products);
        result.put("total", total);
        return result;
    }

    public Product createProduct(Product product) {
        productMapper.insert(product);
        return product;
    }

    public Product updateProduct(Product product) {
        productMapper.update(product);
        return product;
    }

    public void deleteProduct(Long id) {
        productMapper.delete(id);
    }
}