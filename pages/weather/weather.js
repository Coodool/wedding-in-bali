// pages/weather/weather.js
const moment = require('../../libs/moment.min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    forecast: [],
    current: null,
  },

  getCurrentWeather(){
    wx.request({
      url:'https://owmapi.yearito.cn/data/2.5/weather?q=Kuta,id&units=metric&lang=zh_cn&appid=a48c0d6720813da9fe66334760140b2c',
      success: (result)=>{
        const retdata = result.data;
        this.setData({
          current: {
            icon: retdata.weather[0].icon.slice(0,2),
            description: retdata.weather[0].description,
            temp: parseInt(retdata.main.temp),
            lastUpdate: moment(retdata.dt, 'X').format("HH:mm:ss"),
            cityName: retdata.name,
          }
        })
        wx.stopPullDownRefresh();
      },
      fail: console.error
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:'https://owmapi.yearito.cn/data/2.5/forecast?q=Kuta,id&units=metric&lang=zh_cn&appid=a48c0d6720813da9fe66334760140b2c',
      success: (result)=>{
        const retdata = result.data;
        let data = [];
        retdata.list.forEach( item => {
          // const date = moment(item.dt, "X").format("MM-DD");
          const date = item.dt_txt.slice(5,10);
          const index = data.findIndex(i=>i.date == date );
          if( index == -1 ) {
            data.push({
              date: date,
              temp: [Math.round(item.main.temp)],
              icon: [item.weather[0].icon.slice(0,2)]
            })
          } else {
            data[index].temp.push(Math.round(item.main.temp));
            data[index].icon.push(item.weather[0].icon.slice(0,2));
          }
        })
        data = data.map(item => ({
          date: item.date,
          temp_min: Math.min(...item.temp),
          temp_max: Math.max(...item.temp),
          icon: item.icon[Math.floor(item.icon.length/2)]
        }))
        this.setData({
          forecast: data
        })
      },
      fail: console.error
    })

    this.getCurrentWeather();
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
    this.getCurrentWeather();
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
