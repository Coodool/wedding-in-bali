// pages/index/index.js
const App = getApp();
const AV = App.AV;
const LiveQuery = App.LiveQuery;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: true,
    opacity: 0
  },

  clickBG: function (e) {
    if( App.globalData.user ){
      this.enter();
    }
  },

  onAuth: function () {
    wx.getUserInfo({
      success: ({userInfo}) => {
        this.login(userInfo);

        this.setData({
          hasUserInfo: true
        })

        this.enter();
      }
    })
  },

  enter: function() {
    wx.navigateTo({
      url: '/pages/index/index'
    });
  },

  login: function(userInfo){
    const user = AV.User.current();
    // 更新当前用户的信息
    user.set(userInfo).save().then(user => {
      // 成功，此时可在控制台中看到更新后的用户信息
      App.globalData.user = user.toJSON();
    }).catch(console.error);

    //云开发记录用户
    wx.cloud.init({
      traceUser: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.countOpacityTimer = setInterval(()=>{
      if( this.data.opacity < 100 ){
        this.setData({
          opacity: this.data.opacity + 5
        })
      }
    }, 50)

    AV.User.loginWithWeapp().then(user => {
      // 调用小程序 API，得到用户信息
      wx.getUserInfo({
        success: ({userInfo}) => {
          this.login(userInfo);

          //倒计时2s后进入应用
          this.enterAppTimer = setTimeout(function(){
            wx.navigateTo({
              url: '/pages/index/index'
            });
          }, 2000);
        },
        fail: ()=>{
          //显示点击进入按钮
          this.setData({
            hasUserInfo: false
          })
        }
      });
    }).catch(console.error);

    // wx.getUserInfo({
    //   success: res => {
    //     wx.cloud.init({
    //       traceUser: true
    //     })
    //
    //     this.setData({
    //       hasUserInfo: true
    //     })
    //
    //     this.enterAppTimer = setTimeout(function(){
    //       wx.navigateTo({
    //         url: '/pages/index/index'
    //       });
    //     }, 2000);
    //   },
    //   fail: res => {
    //     this.setData({
    //       hasUserInfo: false
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    if( this.enterAppTimer ){
      clearTimeout(this.enterAppTimer);
    }
    clearInterval(this.countOpacityTimer);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: 'Thanks for Your Witness',
      imageUrl: 'https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/transpond.jpg'
    }
  }
})
