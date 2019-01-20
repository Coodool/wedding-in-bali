// map.js
const Hotel = [
  { latitude: -8.561002, longitude: 115.0331913, title:"Amarta（4日住宿）"},
  { latitude: -8.70983, longitude: 115.17404, title:"Neo+（8日/9日住宿）"},
  { latitude: -8.51189, longitude: 115.25831, title:"Bisma（6日/7日住宿）"},
  { latitude: -8.80685, longitude: 115.13069, title:"Le Grande（5日住宿）"},
];

const Restaurant = [
  { latitude: -8.72082, longitude: 115.17318, title:"Bamboo Corner"},
  { latitude: -8.67758, longitude: 115.17022, title:"Naughty Nuri"},
  { latitude: -8.50754, longitude: 115.26633, title:"Fair Warung"},
  { latitude: -8.51066, longitude: 115.26689, title:"Herb Library"},
  { latitude: -8.48198, longitude: 115.25146, title:"Balinese Home Cooking"},
  { latitude: -8.71767, longitude: 115.17461, title:"Sky Garden"},
  { latitude: -8.7051, longitude: 115.17082, title:"Yogi's Paradise"},
  { latitude: -8.72443, longitude: 115.17421, title:"Warung Chef Bagus"},
];

const ScenicSpot = [
  { latitude: -8.72808, longitude: 115.16937, title:"Waterbom（水山公园）"},
  { latitude: -8.44, longitude: 115.38717, title:"Tukad Cepung Waterfall（峡谷瀑布）"},
  { latitude: -8.42968, longitude: 115.44913, title:"Telaga Waja River（漂流地点）"},
  { latitude: -8.71276, longitude: 115.18695, title:"Carrefour（家乐福）"},
  { latitude: -8.41461, longitude: 115.31538, title:"Pura Tirta Empul（圣泉寺）"},
  { latitude: -8.43922, longitude: 115.27992, title:"Tegalalang Rice Terrace（梯田）"},
  { latitude: -8.50719, longitude: 115.26294, title:"Pasar Ubud（乌布市场）"},
  { latitude: -8.50679, longitude: 115.26266, title:"Ubud Palace（乌布皇宫）"},
  { latitude: -8.2742022, longitude: 115.5908486, title:"Tulamben（潜水点）"},
  { latitude: -8.71874, longitude: 115.16888, title:"Kuta Beach（库塔海滩）"},
];

const WeddingChapel = [
  { latitude: -8.8405582, longitude: 115.1014473, title:"海之教堂婚礼"},
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [],
    index: 0,
    scale: 11,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const attr = {
      id: Math.random().toString(36).substr(2),
      width: 30,
      height: 30,
    }

    Hotel.forEach( item => Object.assign(item, attr, { iconPath: "/images/hotel.png"} ));
    Restaurant.forEach( item => Object.assign(item, attr, { iconPath: "/images/restaurant.png"} ));
    ScenicSpot.forEach( item => Object.assign(item, attr, { iconPath: "/images/scene.png"} ));
    WeddingChapel.forEach( item => Object.assign(item, attr, { iconPath: "/images/wedding.png"} ));

    let markers = WeddingChapel.concat(Hotel, Restaurant, ScenicSpot );

    this.setData({
      markers
    })
  },

  onLocate: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: (res) => {
        this.setData({
          location: res,
          scale: 13
        })
      }
    })
  },

  onSelect: function (event) {
    //调试工具中没问题，但是在手机上调试会出现选择后仍然选择全部Marker的Bug
    this.setData({
      markers:[]
    })

    let markers;
    const index = event.currentTarget.dataset.index;
    if( this.data.index == index ) {
      this.setData({
        index: 0,
        markers: WeddingChapel.concat(Hotel, Restaurant, ScenicSpot)
      })
    } else {
      switch (index) {
        case "1":
        markers = WeddingChapel.concat(Restaurant);
        break;
        case "2":
        markers = WeddingChapel.concat(Hotel);
        break;
        case "3":
        markers = WeddingChapel.concat(ScenicSpot);
        break;
      }
      this.setData({
        index,
        markers
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //创建地图上下文，缩放视野到合适位置
    this.mapContext = wx.createMapContext("map");
    this.mapContext.includePoints({
      points: WeddingChapel.concat(Hotel, Restaurant, ScenicSpot)
    })
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
