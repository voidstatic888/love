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
    word_g2: "两个人能否走到一起，时机很重要。\n你出现在她想安定的时候...那么你就胜算很大。\n你出现在她对这个世界充满了好奇的时候...\n那么就算你多美多优秀都是徒劳无用。\n爱得深，爱的早，都不如爱的时候刚刚好。\n如果可以，就让我们，\n晚点在一起，然后一辈子...",
    word_g3: "这辈子，和谁过，怎样过，过多久，\n有人因为爱情， 有人因为物质，\n有人因为容貌， 有人因为前途，有人因为压力， \n而当这日子真的要和选择的人一起过了， 你才明白， \n钱够花就好，容貌不吓人就行， \n其实真正幸福的标准， 无需理由，很简单，\n只要笑容比眼泪多， 你就找对人了。",
    word_g4: "一花一世界，一叶一追寻，\n一曲一场叹，一生为一人。\n",
    word_g5: "有些人注定是等待别人的，\n有些人是注定被人等的。\n\n             ——张小娴",
    word_g6: "我爱你，\n为了你的幸福，我愿意放弃一切\n           --包括你。\n\n               ——张爱玲",
    word_g7: "走着走着，就散了，回忆都淡了；\n回头发现，你不见了，忽然我乱了\n。\n\n               ——徐志摩",
    word_g8: "我喜欢的就是屏幕前真实的你，\n不，是爱，我爱你！",
  }
})