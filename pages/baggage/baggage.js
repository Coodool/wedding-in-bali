// pages/baggage/baggage.js
const AV = require('../../libs/av-weapp-min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var ShareLog = AV.Object.extend('ShareLog');
    var log = new ShareLog();
    const user = AV.User.current().toJSON();
    const pageStack = getCurrentPages();
    const currentPage = pageStack[pageStack.length - 1];
    log.set({
      nickName: user.nickName,
      tag: user.tag,
      city: user.city,
      gender: user.gender,
      avatarUrl: user.avatarUrl,
      page: currentPage.route
    });
    log.save().then(function() {
        console.log("分享日志记录成功！");
      }, function(error) {
    });

    return {
      title: 'Thanks for Your Witness',
      imageUrl: 'https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/transpond.jpg'
    }
  }
})
