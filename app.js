//app.js
const AV = require('./libs/av-weapp.js');
const LiveQuery = require('./libs/av-live-query-weapp-min.js');

var APP_ID = 'JWHVMPTd0CMswito1pqlGsyT-gzGzoHsz';
var APP_KEY = 'NGODzzBtt7HpkCpXf00ng9Yl';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

App({
  onLaunch: function () {
    AV.User.loginWithWeapp().then(user => {
      // 调用小程序 API，得到用户信息
      wx.getUserInfo({
        success: ({userInfo}) => {
          // 更新当前用户的信息
          user.set(userInfo).save().then(user => {
            // 成功，此时可在控制台中看到更新后的用户信息
            this.globalData.user = user.toJSON();
          }).catch(console.error);
        }
      });
    }).catch(console.error);
  },

  AV: AV,
  LiveQuery: LiveQuery,

  globalData: {
    user: null,
  }
})
