// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      title: "印尼报警电话",
      text: "0062-110",
      phone: "0062110",
    },{
      title: "印尼医疗救助电话",
      text: "0062-118",
      phone: "0062118"
    },{
      title: "中国驻登巴萨总领事馆领保电话",
      text: "0062-361-239902",
      phone: "0062361239902"
    },{
      title: "外交部全球领保服务热线",
      text: "0086-10-12308 / 0086-10-59913991",
      phone: "00861012308"
    },{
      title: "巴厘岛国际SOS医疗中心",
      text: "0062-361-720100",
      phone: "0062361720100"
    },{
      title: "巴厘岛国际SOS援助中心",
      text: "0062-217-664633",
      phone: "0062217664633"
    },{
      title: "史带境外旅行保障救援热线",
      text: "0086-21-38295959 / 0086-400-820-7031",
      phone: "00862138295959"
    }]
  },

  onCall: function (event) {
    wx.makePhoneCall({
      phoneNumber: event.currentTarget.dataset.variable
    })
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
      title: 'Thanks for Attending',
      imageUrl: 'https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/transpond.jpg'
    }
  }
})
