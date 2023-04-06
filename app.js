// 載入 express 並建構應用程式伺服器
const express = require('express');
const app = express();
const port = 3000;

// 載入 Handlebars
const exphbs = require('express-handlebars');
// 載入 body-parser
const bodyParser = require('body-parser');
// 載入 mongoose
require('./config/mongoose');

// 樣板引擎指定為 Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// 載入 public (才能使用 style.css)
app.use(express.static('public'));
// 每筆請求都要透過 body-parser 作前置處理
app.use(bodyParser.urlencoded({ extended: true }));

// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index');
});

// 設定 port 3000
app.listen(port, () => {
  console.log('App is running on http://localhost:3000');
});
