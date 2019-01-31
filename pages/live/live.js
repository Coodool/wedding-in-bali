// live/live.js
const App = getApp();
const AV = require('../../libs/av-weapp-min.js');
const { TextMessage } = require('../../libs/realtime.weapp.min.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    msgEx: App.globalData.msgEx,
    liveStream: [], //直播流url
    index: 0,   //线路索引
    log: [],  //数据流日志
    showLog: true,  //是否显示数据流日志
    fullScreen: false,  //是否全屏
    playing: true,    //是否正在播放
    muted: false,   //是否静音
    toolVisible: true,    //视频工具栏可见性
    inputContent: '',    //input输入框内容
    scrollTop: 0, //聊天室滚动条位置
  },

  updateMsgExt(data) {
    //更新消息记录后滚动到聊天消息底部
    const updateCallback = () => {
      let query = wx.createSelectorQuery();
      query.select('#chatList').boundingClientRect(rect=> {
        this.setData({
          scrollTop: rect.height
        })
      }).exec();
    }

    this.setData({
      msgEx: data,
    },updateCallback);
  },

  //输入框内容
  onInputChange(event) {
    this.setData({
      inputContent: event.detail.value
    })
  },

  //发送消息
  onSendMessage() {
    if( this.data.inputContent && App.chatRoom ){
      App.chatRoom.send(new TextMessage(this.data.inputContent))
      .then(message=>{
        console.log("发送消息成功!");
        this.setData({
          inputContent: ''
        });
        const user = AV.User.current().toJSON();
        const msg  = {
          avatarUrl: user.avatarUrl,
          nickName: user.nickName,
          userid: user.objectId,
          tag: user.tag,
          text: message.text,
        }
        App.globalData.msgEx.push(msg);
        this.updateMsgExt(App.globalData.msgEx);
      }).catch(console.error);
    }
  },

  //切换全屏
  toggleFullScreen() {
    this.resetAutoHideTimer();
    if( this.data.fullScreen === true ){
      this.livePlayerContext.exitFullScreen({
        success: (e) => {
          this.setData({
            fullScreen: false
          })
        },
        fail(e){
          console.log("exit full screen failed!")
          console.log(e)
        }
      });
    } else {
      this.livePlayerContext.requestFullScreen({
        direction: 90, //90
        success: (e) => {
          this.setData({
            fullScreen: true
          })
        },
        fail(e){
          console.log("enter full screen failed!")
          console.log(e)
        }
      });
    }
  },

  //重新获取数据流
  restartLive(){
    this.resetAutoHideTimer();
    this.livePlayerContext.play({
      success: (e) => {
        this.setData({
          playing: true
        })
      },
      fail(e){
        console.log("replay live video failed!")
        console.log(e)
      }
    });
  },

  //切换播放状态
  togglePlaying() {
    this.resetAutoHideTimer();
    if( this.data.playing === false ){
      this.livePlayerContext.resume({
        success: (e) => {
          this.setData({
            playing: true
          })
        },
        fail(e){
          console.log("resume live video failed!")
          console.log(e)
        }
      });
    } else {
      this.livePlayerContext.pause({
        success: (e) => {
          this.setData({
            playing: false
          })
        },
        fail(e){
          console.log("pause live video failed!")
          console.log(e)
        }
      });
    }
  },

  //关闭开启声音
  toggleVoice() {
    console.log("toggleVoice");
    this.resetAutoHideTimer();
    this.setData({
      muted: !this.data.muted
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //查询获取直播流
    var query = new AV.Query('Stream');
    query.select(["pull", "push", "remarks"]);
    query.find().then( (stream) => {
      const liveStream = stream.map( (item, index) => ({
        pull: item.get("pull"),
        push: item.get("push"),
        name: `线路${index + 1}`
      }));
      this.setData({
        liveStream
      })
    }, function (error) {
      console.log(error)
      // 异常处理
    });

    this.updateMsgExt(App.globalData.msgEx);

    // 8s后隐藏视频下方工具栏
    this.initialTimer = setTimeout(()=>{
      this.setData({
        toolVisible: false,
      })
    }, 8000)
  },

  resetAutoHideTimer(){
    clearTimeout(this.autoHideTimer);
    if( !this.data.toolVisible ) {
      this.autoHideTimer = setTimeout(()=>{
        this.setData({
          toolVisible: false,
        })
      }, 8000)
    }
  },

  //触屏后显示下方工具栏
  onTapScreen() {
    console.log("onTapScreen");
    clearTimeout(this.initialTimer);
    this.resetAutoHideTimer();
    this.setData({
      toolVisible: !this.data.toolVisible
    })
  },

  statechange(e) {
    console.log('live-player code:', e.detail);
    if( this.data.showLog ) {
      //视频播放开始后关闭日志显示
      if( e.detail.code == '2004' ){
        this.setData({
          showLog: false,
        })
      } else if ( e.detail.message ) {
        const log = [...this.data.log];
        //最多显示8行拉流状态日志
        if( log.length >= 3 ){
          log.shift();
        }
        let localeTimeString = new Date().toLocaleTimeString().slice(0,8);
        const lastMessage = `[${localeTimeString}] ${e.detail.message}`;
        this.setData({
          log: [...log, lastMessage]
        })
      }
    }
  },

  error(e) {
    console.error('live-player error:', e.detail)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.livePlayerContext = wx.createLivePlayerContext("live");
    this.updateMsgTimer = setTimeout(()=>{
      if( this.data.msgEx.length == 0 ){
        App.getChatMessages();
      }
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.updateMsgExt(App.globalData.msgEx);
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
    clearTimeout(this.initialTimer);
    clearTimeout(this.autoHideTimer);
    clearTimeout(this.updateMsgTimer);
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
