const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 静态文件服务
app.use(express.static(path.join(__dirname)));

// API代理 - 使用更简单的配置
const apiProxy = createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api'
  },
  logLevel: 'debug'
});
app.use('/api', apiProxy);

// 处理Vue路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Static files served from: ${path.join(__dirname)}`);
  console.log(`API requests proxied to: http://localhost:8080/api`);
});