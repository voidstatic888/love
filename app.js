//app.js
App({
  data: {
    
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    innerAudioContext: null,
    loveName: "殷秀玲",
    word_g2: "两个人能否走到一起，时机很重要。\n你出现在她想安定的时候...那么你就胜算很大。\n你出现在她对这个世界充满了好奇的时候...\n那么就算你多美多优秀都是徒劳无用。\n爱得深，爱的早，都不如爱的时候刚刚好。\n如果可以，就让我们，\n晚点在一起，然后一辈子..."
  }
})