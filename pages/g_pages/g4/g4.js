// pages/item_pages/g4/g4.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word: "",
    imageShow: "block",
    textShow: "none"
  },

  onImageTap: function () {
    this.setData({
      imageShow: "none",
      textShow: "block"
    })
    this.showText()
  },

  showText: function () {
    //文字逐个显示
    var word = app.globalData.word_g4;
    var that = this
    var i = 0;
    var time = setInterval(function () {
      var text = word.substring(0, i);
      i++;
      that.setData({
        word: text
      });
      if (text.length == word.length) {
        //   console.log("定时器结束！");
        clearInterval(time);
      }
    }, 200)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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