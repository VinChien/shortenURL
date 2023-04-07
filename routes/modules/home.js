// 載入 Express 與 Express 路由器
const express = require('express');
const router = express.Router();
// 載入 URL.js
const URL = require('../../models/URL');
// 載入 shortenURL.js
const shortenURL = require('../../utils/shortenURL');

// index route
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  // 如果沒有輸入 url 就導回到 index route
  if (!req.body.url) {
    return res.redirect('/');
  }

  // 設定短網址為五個字
  const shortURL = shortenURL(5);
  // 將使用者輸入的網址去除前後空白
  const url = req.body.url.trim();

  // 從資料庫找一個符合條件的 data
  URL.findOne({ originalURL: url })
    // 沒有符合條件的 data，就新增 data
    .then((data) => (data ? data : URL.create({ shortURL, originalURL: url })))
    .then((data) =>
      res.render('index', {
        originURL: req.headers.origin,
        shortURL: data.shortURL,
      })
    );
});

// 匯出路由器
module.exports = router;
