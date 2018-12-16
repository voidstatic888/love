//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: ['g3', 'g2', 'g4', 'g5', 'g6', 'g7', 'g8'],
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
      app.globalData.innerAudioContext.play()
    } else {
      app.globalData.innerAudioContext = wx.createInnerAudioContext()
      app.globalData.innerAudioContext.autoplay = true
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
  },
  jump_g3: function(){
    wx.navigateTo({
      url: '/pages/g_pages/g3/g3',
    })
  },
  jump_g2: function () {
    wx.navigateTo({
      url: '/pages/g_pages/g2/g2',
    })
  },
  jump_g4: function () {
    wx.navigateTo({
      url: '/pages/g_pages/g4/g4',
    })
  },
  jump_g5: function () {
    wx.navigateTo({
      url: '/pages/g_pages/g5/g5',
    })
  },
  jump_g6: function () {
    wx.navigateTo({
      url: '/pages/g_pages/g6/g6',
    })
  },
  jump_g7: function () {
    wx.navigateTo({
      url: '/pages/g_pages/g7/g7',
    })
  },
  jump_g8: function () {
    wx.navigateTo({
      url: '/pages/g_pages/g8/g8',
    })
  }
})
