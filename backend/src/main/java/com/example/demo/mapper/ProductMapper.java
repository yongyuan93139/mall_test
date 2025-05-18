package com.example.demo.mapper;

import com.example.demo.entity.Product;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ProductMapper {
    @Select("SELECT * FROM product LIMIT #{size} OFFSET #{offset}")
    List<Product> findAll(@Param("offset") int offset, @Param("size") int size);

    @Select("SELECT COUNT(*) FROM product")
    int count();

    @Insert("INSERT INTO product(name, price, stock) VALUES(#{name}, #{price}, #{stock})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Product product);

    @Update("UPDATE product SET name=#{name}, price=#{price}, stock=#{stock} WHERE id=#{id}")
    int update(Product product);

    @Delete("DELETE FROM product WHERE id=#{id}")
    int delete(Long id);
}