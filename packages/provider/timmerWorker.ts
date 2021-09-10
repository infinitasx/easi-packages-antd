export default () => {
  // 监听主线程的调用通知
  self.addEventListener(
    'message',
    function(e) {
      const { type } = e.data;
      let timer;
      const refreshTime = () => {
        timer = setTimeout(() => {
          // 将计算结果传递给主线程
          self.postMessage(type);
        }, 5000);
      };

      if (type !== 'clear') {
        refreshTime();
      } else {
        clearTimeout(timer);
        self.close();
      }
    },
    false,
  );
};
