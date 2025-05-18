const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// 静态文件服务
app.use(express.static(path.join(__dirname)));

// 手动API代理中间件
app.use('/api', (req, res) => {
  const options = {
    hostname: 'localhost',
    port: 8080,
    path: req.originalUrl,
    method: req.method,
    headers: req.headers
  };

  const proxy = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxy, { end: true });
});

// 处理前端路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Static files served from: ${path.join(__dirname)}`);
  console.log(`API requests proxied to: http://localhost:8080/api`);
});