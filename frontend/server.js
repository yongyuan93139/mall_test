const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 静态文件服务
app.use(express.static(path.join(__dirname)));

// API代理配置
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true,
  pathRewrite: {'^/api': '/api'},
  logLevel: 'debug'
}));

// 所有其他请求返回index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Serving static files from: ${path.join(__dirname)}`);
  console.log(`API requests proxied to: http://localhost:8080/api`);
});