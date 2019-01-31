// pages/index/index.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    mainPanel: [
      { text: "现场嘉宾", icon: "guest.png", nav: "/pages/guest/guest"},
      { text: "婚纱照", icon: "gallery.png", nav: "/pages/gallery/gallery"},
    ],
    travelPanel: [
      { text: "旅程", icon: "travel.png", nav: "/pages/journey/journey"},
      { text: "地图", icon: "map.png", nav: "/pages/map/map"},
      { text: "清单", icon: "baggage.png", nav: "/pages/baggage/baggage"},
      { text: "天气", icon: "weather.png", nav: "/pages/weather/weather"},
      { text: "帮助", icon: "help.png", nav: "/pages/help/help"},
    ],
    appTool: [
      { text: "汇率转换", icon: "exchange.png", appid: "wx28fe04e3082fa934"},
      { text: "翻译工具", icon: "translate.png", appid: "wxb1070eabc6f9107e"},
      { text: "点菜助手", icon: "menu-translate.png", appid: "wxc923b054dba2f2a4"},
    ],
  },

  clickPanel: function (event) {
    if( event.currentTarget.dataset.url ){
      wx.navigateTo({
        url: event.currentTarget.dataset.url
      });
    } else {
      wx.navigateToMiniProgram({
        appId: event.currentTarget.dataset.appid
      })
    }
  },

  clickPlay: function (event) {
    wx.navigateTo({
      url: "/pages/live/live"
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
