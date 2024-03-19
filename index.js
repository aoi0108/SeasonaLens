const express = require('express');
const cors = require('cors');

const app = express();

// CORSミドルウェアを使用してCORSヘッダーを設定
app.use(cors());

// 例：GETリクエストの処理
app.get('/api/data', (req, res) => {
  res.send('Your data');
});

// Expressアプリケーションをポート3000で起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
