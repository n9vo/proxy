
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Target server URL (main server you want to proxy to)
const targetUrl = 'http://niggalink.org';  // Replace with your main server URL

// Proxy setup for all requests
app.use('/', createProxyMiddleware({
  target: targetUrl,
  changeOrigin: true, // Change the origin of the host header to match the target URL
  pathRewrite: {
    '^/': '/', // Rewrite the URL path if needed
  },
  logLevel: 'debug', // Optional: To log the proxy activity (useful for debugging)
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
