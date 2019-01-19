// pages/index/index.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: true,
    opacity: 0
  },

  clickBG: function (e) {
    if( this.data.hasUserInfo ){
      this.enter();
    }
  },

  bindGetUserInfo: function (e) {
    if( e.detail.userInfo ){
      //记录用户登陆日志
      wx.cloud.init({
        traceUser: true
      })
    }
    this.enter();
  },

  enter: function() {
    wx.navigateTo({
      url: '/pages/index/index'
    });
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

    wx.getUserInfo({
      success: res => {
        wx.cloud.init({
          traceUser: true
        })

        this.setData({
          hasUserInfo: true
        })

        this.enterAppTimer = setTimeout(function(){
          wx.navigateTo({
            url: '/pages/index/index'
          });
        }, 2000);
      },
      fail: res => {
        this.setData({
          hasUserInfo: false
        })
      }
    })
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
