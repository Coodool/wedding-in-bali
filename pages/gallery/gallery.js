// pages/gallery/gallery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      date: "2017年8月10日",
      location: "抚仙湖",
      images: [
        "https://wx-1256884783.picgz.myqcloud.com/Fuxian-Lake/2.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/Fuxian-Lake/1.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/Fuxian-Lake/3.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/Fuxian-Lake/IMG_9618.JPG!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/Fuxian-Lake/IMG_9620.JPG!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/Fuxian-Lake/IMG_9622.JPG!minimize",
      ]
    },{
      date: "2018年3月22日",
      location: "武汉大学",
      images: [
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_8727.JPG!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_0041_jx.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_0070_jx.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_8806.JPG!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_8998_2.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9056.JPG!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9108_2.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9199.JPG!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9350_2.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9503_jx.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9524_2.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9568_2.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9638_jx.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9660_jx.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9672_jx.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9702_jx.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/WHU/LE2_9889_jx.jpg!minimize",
      ]
    },{
      date: "2018年4月23日",
      location: "森系",
      images: [
        "https://wx-1256884783.picgz.myqcloud.com/Forest/1.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/Forest/2.jpg!minimize",
      ]
    },{
      date: "2018年4月23日",
      location: "棚拍",
      images: [
        "https://wx-1256884783.picgz.myqcloud.com/Indoor/DOU_1505.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/Indoor/DOU_1480.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/Indoor/DOU_1483.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/Indoor/DOU_1562.jpg!minimize",
        "https://wx-1256884783.picgz.myqcloud.com/Indoor/sss.jpg!minimize",
      ]
    }]
  },

  clickImage: function (e) {
    wx.previewImage({
      urls: e.currentTarget.dataset.variable // 需要预览的图片http链接列表
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

  }
})
