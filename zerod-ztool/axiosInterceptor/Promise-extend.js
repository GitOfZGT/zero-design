// const promise = new Promise(function(resolve, reject) {
//     // ... some code
  
//     if (/* 异步操作成功 */){
//       resolve(value);
//     } else {
//       reject(error);
//     }
//   });
// Promise.prototype.then() 
// Promise.prototype.catch()
// Promise.race()
// Promise.resolve()
// Promise.reject()

// Promise除了以上原生自带的方法外，我们还可以扩展一些很有用的方法
// Promise 对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到（因为 Promise 内部的错误不会冒泡到全局）。因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。
Promise.prototype.done = function (onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected)
      .catch(function (reason) {
        // 抛出一个全局错误
        setTimeout(() => { throw reason }, 0);
      });
  };
//   finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
      value  => P.resolve(callback()).then(() => value),
      reason => P.resolve(callback()).then(() => { throw reason })
    );
  };