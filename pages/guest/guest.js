// pages/guest/guest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      image: "https://wx-1256884783.picgz.myqcloud.com/guest/yelin.png!avator",
      name: "叶林",
      description: "新郎的双胞胎哥哥，学霸一枚，德国斯图加特读研中，目前在德国宇航中心做毕设，会英语，德语和西班牙语，反正学习好就对了。专业代购二十年，品质值得信赖，主营德国奶粉和更年期保健药品。"
    },{
      image: "https://wx-1256884783.picgz.myqcloud.com/guest/tiedan.jpg!avator",
      name: "刘振东",
      description: "新郎的发小一枚，人送外号铁蛋，开封公务员，为人很皮，骚话连篇，游戏高玩，两港一场刚枪王，热衷堵桥、追空头、甩锅。"
    },{
      image: "https://wx-1256884783.picgz.myqcloud.com/guest/ergou.jpg!avator",
      name: "程方政",
      description: "新郎的发小又一枚，人送外号二狗，山西晋城小老板，黑白两道通吃，为人仗义，出手阔绰，喜欢装逼。"
    },{
      image: "https://wx-1256884783.picgz.myqcloud.com/guest/lixin.jpg!avator",
      name: "李颖",
      description: "新娘的闺蜜，人送外号李欣，坐标重庆，外表御姐内心萝莉的软萌准医生一枚，喜欢吃，喜欢吃，以及喜欢吃，日常云吸猫吸狗，偶尔嗑话剧。"
    },{
      image: "https://wx-1256884783.picgz.myqcloud.com/guest/zhenzhen.png!avator",
      name: "贾甄祯",
      description: "新郎的妹妹，日语专业，大三考研中，天真单纯，好奇心极强，口头禅“为啥啊？”"
    },{
      image: "https://wx-1256884783.picgz.myqcloud.com/guest/liukun.jpg!avator",
      name: "刘坤 💗 谢莹莹",
      description: "刘坤，人称坤哥，新郎的大学同学，大三自习期间形影不离，开得一手改装摩托车满校园轰油门，日本名古屋大学机器人硕士，现在华为2012人工智能实验室任职。反正来头很大就对了。"
    },{
      image: "https://wx-1256884783.picgz.myqcloud.com/guest/wenwu.jpg!avator",
      name: "唐文武 💗 周靖",
      description: "唐文武，自称唐小白，新郎的大学上铺，地道东北人，帅气逼人，耿直仗义，人狠话不多，精通斗地主、麻将，自带记牌器，常年报牌两张。"
    }]
  },

  clickImage: function (e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.variable] // 需要预览的图片http链接列表
    })
  },
})
