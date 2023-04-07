// 載入 express 並建構應用程式伺服器
const express = require('express');
const app = express();
const port = 3000;

// 載入 Handlebars
const exphbs = require('express-handlebars');
// 載入 body-parser
const bodyParser = require('body-parser');
// 載入路由器
const routes = require('./routes');
// 載入 mongoose
require('./config/mongoose');

// 樣板引擎指定為 Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// 載入 public (才能使用 style.css)
app.use(express.static('public'));
// 每筆請求都要透過 body-parser 作前置處理
app.use(bodyParser.urlencoded({ extended: true }));
// 將 request 導入路由器
app.use(routes);

// 設定 port 3000
app.listen(port, () => {
  console.log('App is running on http://localhost:3000');
});
