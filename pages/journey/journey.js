var util = require('../../utils/util.js');

Page({
  data: {
    date: ["2月3日", "2月4日", "2月5日", "2月6日", "2月7日", "2月8日", "2月9日", "2月10日"],
    current: util.judgeDay(),
    bambooCorner: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/bambooCorner_1.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/bambooCorner_2.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/bambooCorner_3.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/bambooCorner_4.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/bambooCorner_5.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/bambooCorner_6.png?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    naughtyNuri: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Naughty_Nuri_1.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Naughty_Nuri_2.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Naughty_Nuri_3.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Naughty_Nuri_4.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Naughty_Nuri_5.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Naughty_Nuri_6.png?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    naughtyNuriMenu: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Naughty_Nuri_10.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Naughty_Nuri_11.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Naughty_Nuri_12.png?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    warungBale: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_1.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_2.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_3.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_4.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_5.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_6.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_7.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_8.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_9.png?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    warungBaleMenu: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_Menu_1.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_Menu_2.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_Menu_3.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_Menu_4.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_Menu_5.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_Menu_6.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Bale_Menu_7.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    herbLibrary: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Herb_Library_1.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Herb_Library_2.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Herb_Library_3.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Herb_Library_4.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Herb_Library_5.png?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    balineseHomeCooking: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Balinese_Home_Cooking_1.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Balinese_Home_Cooking_2.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Balinese_Home_Cooking_3.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Balinese_Home_Cooking_4.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Balinese_Home_Cooking_5.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Balinese_Home_Cooking_6.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Balinese_Home_Cooking_7.png?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    warungChefBagus: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Chef_Bagus_1.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Chef_Bagus_2.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Chef_Bagus_3.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Warung_Chef_Bagus_4.png?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    yogis: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Yogis_Paradise_1.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Yogis_Paradise_2.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Yogis_Paradise_3.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Yogis_Paradise_4.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Yogis_Paradise_5.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Yogis_Paradise_6.png?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    amarta: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/amarta_1.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/amarta_2.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/amarta_3.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/amarta_4.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/amarta_5.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/amarta_6.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/amarta_7.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/amarta_8.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/amarta_9.png?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    leGrande: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/LeGrande_1.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/LeGrande_2.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/LeGrande_3.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/LeGrande_4.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/LeGrande_5.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/LeGrande_6.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/LeGrande_7.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    pertiwiBisma: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/PertiwiBisma_1.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/PertiwiBisma_2.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/PertiwiBisma_3.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/PertiwiBisma_4.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/PertiwiBisma_5.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/PertiwiBisma_6.jpg?imageMogr2/thumbnail/!560x560r/interlace/1"
    ],
    neo: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/Neo_1.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/Neo_2.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/Neo_3.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Hotels/Neo_4.jpg?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
    skyGarden: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Sky_Garden_1.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Sky_Garden_2.png?imageMogr2/thumbnail/!560x560r/interlace/1",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Journey/Foods/Sky_Garden_3.png?imageMogr2/thumbnail/!560x560r/interlace/1",
    ],
  },

  changeDate: function (e) {
    this.setData({
      current: e.detail.current
    })
  },

  clickDate: function (e) {
    this.setData({
      current: e.currentTarget.dataset.variable
    })
  },

  clickImage: function (e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.variable]
    })
  },

  clickSwiperImage: function (e) {
    const param = e.currentTarget.dataset;
    wx.previewImage({
      urls: this.data[param.name],
      current: this.data[param.name][param.index]
    })
  },

  makeCall: function (event) {
    wx.makePhoneCall({
      phoneNumber: event.currentTarget.dataset.number
    })
  },
})
