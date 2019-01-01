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
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Fuxian-Lake/_DSC6125.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Fuxian-Lake/_DSC6021.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Fuxian-Lake/_DSC6069.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Fuxian-Lake/_DSC6092.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Fuxian-Lake/_DSC6083.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Fuxian-Lake/_DSC6141.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Fuxian-Lake/_DSC6159.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Fuxian-Lake/_DSC6177.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Fuxian-Lake/_DSC6216.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Fuxian-Lake/_DSC6278.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Fuxian-Lake/_DSC6340.jpg!gallery",
      ]
    },{
      date: "2018年3月22日",
      location: "武汉大学",
      images: [
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_8727.JPG!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_9672_jx.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_9660_jx.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_9638_jx.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_9702_jx.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_8806.JPG!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_8998_2.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_9056.JPG!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_9108_2.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_9199.JPG!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_9350_2.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_9503_jx.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_9524_2.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/WHU/LE2_9568_2.jpg!gallery",
      ]
    },{
      date: "2018年3月22日",
      location: "沙漠",
      images: [
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Desert/LE2_0070_jx.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Desert/LE2_0041_jx.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Desert/LE2_9889_jx.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Desert/LE2_9950_jx.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Desert/LE2_0017_jx.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Desert/LE2_0102_jx.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Desert/LE2_9859_jx.jpg!gallery",
      ]
    },{
      date: "2018年4月23日",
      location: "森系",
      images: [
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Forest/DOU_0866.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Forest/DOU_0788.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Forest/DOU_0801.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Forest/DOU_0944.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Forest/DOU_0953.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Forest/DOU_0976.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Forest/DOU_0994.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Forest/DOU_1003.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Forest/DOU_1118.jpg!gallery",
      ]
    },{
      date: "2018年4月23日",
      location: "龙马山",
      images: [
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Mountain/DOU_1244.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Mountain/DOU_1186.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Mountain/DOU_1159.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Mountain/DOU_1175.jpg!gallery",
      ]
    },{
      date: "2018年4月24日",
      location: "古风",
      images: [
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Antiquity/DOU_1592.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Antiquity/DOU_1479.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Antiquity/DOU_1398.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Antiquity/DOU_1413.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Antiquity/DOU_1430.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Antiquity/DOU_1460.jpg!gallery",
      ]
    },{
      date: "2018年4月24日",
      location: "内景棚拍",
      images: [
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Indoor/DOU_1505.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Indoor/DOU_1480.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Indoor/DOU_1483.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Indoor/DOU_1489.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Indoor/DOU_1516.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Indoor/DOU_1524.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Indoor/DOU_1550.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Indoor/DOU_1562.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Indoor/DOU_1552.jpg!gallery",
        "http://wx-1256884783.picgz.myqcloud.com/Gallery/Indoor/DOU_1566.jpg!gallery",
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
    return {
      title: 'Thanks for Attending',
      imageUrl: 'https://wx-1256884783.picgz.myqcloud.com/transpond.jpg'
    }
  }
})
