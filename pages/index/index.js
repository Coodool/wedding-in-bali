// pages/index/index.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    panel: [
      {
        text: "旅程",
        icon: "/images/journey.png",
        nav: "/pages/journey/journey"
      },
      {
        text: "嘉宾",
        icon: "/images/guest.png",
        nav: "/pages/guest/guest"
      },
      {
        text: "婚纱",
        icon: "/images/gallery.png",
        nav: "/pages/gallery/gallery"
      },
      {
        text: "地图",
        icon: "/images/map.png",
        nav: "/pages/map/map"
      },
      {
        text: "祝福",
        icon: "/images/blessing.png",
        nav: "/pages/blessing/blessing"
      },
      {
        text: "求助",
        icon: "/images/help.png",
        nav: "/pages/help/help"
      }
    ]
  },

  clickPanel: function (event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.url
    });
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
    return {
      title: 'Thanks for Your Witness',
      imageUrl: 'https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/transpond.jpg'
    }
  }
})
