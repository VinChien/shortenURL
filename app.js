// 載入 express 並建構應用程式伺服器
const express = require('express');
const app = express();
const port = 3000;
// 載入 mongoose
const mongoose = require('mongoose');
// 啟用 Handlebars
const exphbs = require('express-handlebars');

// 樣板引擎指定為 Handlebars
app.engine(
  'handlebars',
  exphbs({ defaultLayout: 'main', extname: '.handlebars' })
);
app.set('view engine', 'handlebars');

// 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// 設定連線到 mongoDB，並處理 DeprecationWarning 警告
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 取得資料庫連線狀態
const db = mongoose.connection;
// 連線異常
db.on('error', () => {
  console.log('mongodb error!');
});
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!');
});

// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index');
});

// 設定 port 3000
app.listen(port, () => {
  console.log('App is running on http://localhost:3000');
});
