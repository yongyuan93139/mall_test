-- 创建商品表
CREATE TABLE IF NOT EXISTS product (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 插入测试数据
INSERT INTO product (name, price, stock) VALUES 
('商品1', 100.00, 50),
('商品2', 200.00, 30),
('商品3', 150.00, 40),
('商品4', 300.00, 20),
('商品5', 250.00, 60),
('商品6', 180.00, 35),
('商品7', 220.00, 25),
('商品8', 190.00, 45),
('商品9', 270.00, 55),
('商品10', 310.00, 15);