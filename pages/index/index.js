//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: ['g3.jpg', 'g2.jpg', 'g4.jpg', 'g5.jpg', 'g6.jpg', 'g7.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: true,
    interval: 2000,
    duration: 500,
    indicator_color: "rgba(241, 158, 194, .3)",
    indicator_active_color: "#ff00ff",
    loveName: "",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    innerAudioContext: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      loveName: app.globalData.loveName
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function(){
    if (app.globalData.innerAudioContext) {
      console.log("播放")
      //app.globalData.innerAudioContext.play()
    } else {
      app.globalData.innerAudioContext = wx.createInnerAudioContext()
      app.globalData.innerAudioContext.autoplay = false
      app.globalData.innerAudioContext.src = 'songs/StayWithMe-mini.mp3'
      app.globalData.innerAudioContext.loop = true
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
