console.log('拼多多抓取器插件已加载。');

// 监听 popup.js 发送的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fetchData') {
    // 在此处获取商品信息
    console.log('开始抓取商品信息。');
    // 示例代码：获取商品名称
    const productName = document.querySelector('.goods-name').textContent;
    console.log('商品名称：', productName);
    // 返回商品信息
    sendResponse({ productName: productName });
  }
});
