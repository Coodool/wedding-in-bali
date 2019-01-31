//app.js
const AV = require('/libs/av-weapp-min.js');
const LiveQuery = require('/libs/av-live-query-weapp-min.js');
const { Realtime, TextMessage, Event } = require('/libs/realtime.weapp.min.js');

var APP_ID = 'JWHVMPTd0CMswito1pqlGsyT-gzGzoHsz';
var APP_KEY = 'NGODzzBtt7HpkCpXf00ng9Yl';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var realtime = new Realtime({
  appId: APP_ID,
  appKey: APP_KEY
});

App({
  onLaunch: function () {
    AV.User.loginWithWeapp()
    .then(user => {
      // 调用小程序 API，得到用户信息
      wx.getUserInfo({
        success: ({userInfo}) => {
          // 更新当前用户的信息
          user.set(userInfo).save().then(user => {
            // 成功，此时可在控制台中看到更新后的用户信息
            this.globalData.user = user.toJSON();
          }).catch(console.error);
        }
      });

      //创建即时通信客户端
      return realtime.createIMClient(user)
    })
    .then(client => {
      this.client = client;
      var query = client.getChatRoomQuery();
      return query.equalTo('name', '海外婚礼直播间').find()
    })
    .then(chatRooms => {
      if( chatRooms.length ){
        return chatRooms[0].join();

        // return client.getConversation(chatRooms[0].id)
        //   .then(conversation => {
        //     return conversation.join();
        //   })
      } else {
        return this.client.createChatRoom({
          name: '海外婚礼直播间',
        })
          .then(chatRoom => {
            return chatRoom.join();
          })
      }
    })
    .then(chatRoom => {
      this.chatRoom = chatRoom;
      console.log("成功加入直播间聊天室");

      //查询当前直播间人数
      chatRoom.count().then(function(membersCount) {
        console.log("当前直播间共有：" + membersCount + "人");
      }).catch(console.error);

      //获取最近30条聊天记录
      return chatRoom.queryMessages({
        limit: 30, // limit 取值范围 1~1000，默认 20
      })
    })
    .then( messages => {
      console.log("获取聊天记录成功");
      const requestData = messages.map(item=>({
        userId: item.from,
        text: item.text,
        timestamp: item.timestamp
      }));
      return AV.Cloud.run('getUsersInfo', {
        messages: requestData,
      })
    })
    .then((data) => {
      // 调用成功，得到成功的应答
      this.globalData.msgEx = data;
      this.syncMsgToPage();

      //获取新消息的回调函数
      this.chatRoom.on(Event.MESSAGE, (message) => {
        console.log(`直播间收到 ${message.from} 的新消息：${message.text}`);
        const requestData = {
          userId: message.from,
          text: message.text,
          timestamp: message.timestamp
        }
        AV.Cloud.run('getSingleUserInfo', {
          message: requestData,
        })
        .then( data => {
          this.globalData.msgEx.push(data);
          this.syncMsgToPage();
        }).catch(console.error);
      })
    }).catch(console.error);
  },

  syncMsgToPage() {
    const pages = getCurrentPages();
    const lastPage = pages[pages.length - 1];
    if( lastPage && lastPage.route == "pages/live/live" ){
      lastPage.updateMsgExt(this.globalData.msgEx);
    }
  },

  globalData: {
    msgEx: [],
    user: null,
  }
})
