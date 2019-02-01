// pages/weather/weather.js
const moment = require('../../libs/moment.min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: new Array(2).fill({}),
  },

  callWeatherApi(city, index){
    wx.request({
      url: `https://owmapi.yearito.cn/data/2.5/weather?q=${city}&units=metric&lang=zh_cn&appid=a48c0d6720813da9fe66334760140b2c`,
      success: (result)=>{
        const retdata = result.data;
        const data = {
          icon: retdata.weather[0].icon.slice(0,2),
          description: retdata.weather[0].description,
          temp: parseInt(retdata.main.temp),
          lastUpdate: moment(retdata.dt, 'X').format("HH:mm:ss"),
          cityName: retdata.name,
        }
        this.data.weather[index].current = data;
        this.setData({
          weather: this.data.weather
        });
      },
      fail: (e)=>{
        console.log(e);
      },
      complete: ()=>{
        wx.stopPullDownRefresh();
      }
    })
  },

  callForecastApi(city, index){
    wx.request({
      url: `https://owmapi.yearito.cn/data/2.5/forecast?q=${city}&units=metric&lang=zh_cn&appid=a48c0d6720813da9fe66334760140b2c`,
      success: (result)=>{
        const retdata = result.data;
        let data = [];
        retdata.list.forEach( item => {
          // const date = item.dt_txt.slice(5,10);
          const date = moment(item.dt, "X").format("MM-DD");
          if( date == moment().format("MM-DD") ) {
            return ;
          }

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
        })).slice(0,4)

        this.data.weather[index].forecast = data;
        this.setData({
          weather: this.data.weather
        })
      },
      fail: (e)=>{
        console.log(e);
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.callWeatherApi('Kuta,id', 0);
    this.callForecastApi('Kuta,id', 0);
    this.callWeatherApi('Ubud,id', 1);
    this.callForecastApi('Ubud,id', 1);
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
    this.callWeatherApi('Kuta,id', 0);
    this.callWeatherApi('Ubud,id', 1);
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
