// char data
const baseChar =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// 縮短網址的功能，可以輸入要多少字數 (len)
function shortenURL(len) {
  let result = '';
  for (let i = 0; i < len; i++) {
    // 隨機取得 0 ~ 61 的 index
    const index = Math.floor(Math.random() * baseChar.length);
    // 從 data 中把相對應的字取出
    const char = baseChar[index];
    // 把取出的字加入 result
    result += char;
  }
  // 回傳
  return result;
}
// 將功能匯出
module.exports = shortenURL;
