// pages/index/index.js
const App = getApp();
const AV = require('../../libs/av-weapp-min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: true,
    opacity: 0,
    animationData: {}
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


  //登陆后的逻辑，在LeanCloud和云开发后台分别记录用户登陆信息
  login: function(userInfo){
    const user = AV.User.current();
    // 更新当前用户的信息
    user.set(userInfo).save().then(user => {
      // 成功，此时可在控制台中看到更新后的用户信息
      App.globalData.user = user.toJSON();
    }).catch(console.error);

    //登陆日志
    var LoginLog = AV.Object.extend('LoginLog');
    var log = new LoginLog();
    log.set(userInfo);
    log.save().then(function() {
      console.log("登陆日志写入成功！")
    }, function(error) {
    });

    //云开发记录用户
    wx.cloud.init({
      traceUser: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置邀请函渐显
    const animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
    })

    animation.opacity(0).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(() => {
      animation.opacity(1).step()
      this.setData({
        animationData: animation.export()
      })
    }, 100)

    AV.User.loginWithWeapp().then(user => {
      // 调用小程序 API，得到用户信息
      wx.getUserInfo({
        success: ({userInfo}) => {
          this.login(userInfo);

          //倒计时2s后进入应用
          // this.enterAppTimer = setTimeout(function(){
          //   wx.navigateTo({
          //     url: '/pages/index/index'
          //   });
          // }, 2000);
        },
        fail: ()=>{
          //显示点击进入按钮
          this.setData({
            hasUserInfo: false
          })
        }
      });
    }).catch(console.error);
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
