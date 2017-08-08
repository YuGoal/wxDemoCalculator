// databind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "数据绑定",
    hiddencontent: "隐藏数据",
    flag: false,
    num1: "",
    num2: "",
    result:"",
    user: {
      name: "caoyu",
      age: 18
    }
  },

  add : function(e){
    var r = this.data.num1*1 + this.data.num2*1;
    this.setData({
      result:r
    });
  },

  num1 : function(e){
    var n = e.detail.value;
    if(!isNaN(n)){
      this.setData({
        num1:n
      });
    }
  },
  num2: function (e) {
    var n = e.detail.value;
    if (!isNaN(n)) {
      this.setData({
        num2: n
      });
    }
  },

  checkme: function (event) {
    console.log(event)
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