var util = require('../../utils/util.js');

Page({
  data: {
    date: ["2月3日", "2月4日", "2月5日", "2月6日", "2月7日", "2月8日", "2月9日", "2月10日"],
    current: util.judgeDay(),
    bambooCorner: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/bambooCorner_1.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/bambooCorner_2.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/bambooCorner_3.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/bambooCorner_4.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/bambooCorner_5.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/bambooCorner_6.png",
    ],
    naughtyNuri: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Naughty_Nuri_1.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Naughty_Nuri_2.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Naughty_Nuri_3.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Naughty_Nuri_4.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Naughty_Nuri_5.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Naughty_Nuri_6.png",
    ],
    naughtyNuriMenu: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Naughty_Nuri_10.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Naughty_Nuri_11.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Naughty_Nuri_12.png",
    ],
    warungBale: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_1.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_2.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_3.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_4.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_5.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_6.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_7.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_8.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_9.png",
    ],
    warungBaleMenu: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_Menu_1.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_Menu_2.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_Menu_3.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_Menu_4.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_Menu_5.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_Menu_6.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Bale_Menu_7.jpg",
    ],
    herbLibrary: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Herb_Library_1.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Herb_Library_2.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Herb_Library_3.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Herb_Library_4.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Herb_Library_5.png",
    ],
    balineseHomeCooking: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Balinese_Home_Cooking_1.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Balinese_Home_Cooking_2.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Balinese_Home_Cooking_3.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Balinese_Home_Cooking_4.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Balinese_Home_Cooking_5.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Balinese_Home_Cooking_6.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Balinese_Home_Cooking_7.png",
    ],
    warungChefBagus: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Chef_Bagus_1.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Chef_Bagus_2.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Chef_Bagus_3.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Warung_Chef_Bagus_4.png",
    ],
    yogis: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Yogis_Paradise_1.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Yogis_Paradise_2.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Yogis_Paradise_3.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Yogis_Paradise_4.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Yogis_Paradise_5.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Yogis_Paradise_6.png",
    ],
    amarta: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/amarta_1.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/amarta_2.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/amarta_3.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/amarta_4.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/amarta_5.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/amarta_6.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/amarta_7.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/amarta_8.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/amarta_9.png",
    ],
    leGrande: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/LeGrande_1.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/LeGrande_2.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/LeGrande_3.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/LeGrande_4.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/LeGrande_5.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/LeGrande_6.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/LeGrande_7.jpg",
    ],
    pertiwiBisma: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/PertiwiBisma_1.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/PertiwiBisma_2.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/PertiwiBisma_3.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/PertiwiBisma_4.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/PertiwiBisma_5.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/PertiwiBisma_6.jpg"
    ],
    neo: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/Neo_1.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/Neo_2.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/Neo_3.jpg",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Hotels/Neo_4.jpg",
    ],
    skyGarden: [
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Sky_Garden_1.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Sky_Garden_2.png",
      "https://wx-1256884783.cos.ap-guangzhou.myqcloud.com/Foods/Sky_Garden_3.png",
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
