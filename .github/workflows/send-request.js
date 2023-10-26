const axios = require('axios');

async function sendRequest(url, data) {
  try {
    const response = await axios.post(url, data);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// 从命令行参数获取 URL 和数据
const url = process.argv[2];
// const data = process.argv[3];

// 发送 HTTP 请求
// sendRequest(url, data);
console.log(1, url)
