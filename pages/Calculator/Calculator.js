// Calculator.js
var calculate = function (data1, oper, data2) {
  var data;
  data1 = parseFloat(data1);
  data2 = parseFloat(data2);
  switch (oper) {
    case "+":
      data = data1 + data2;
      break;
    case "-":
      data = data1 - data2;
      break;
    case "*":
      data = data1 * data2;
      break;
    case "/":
      if (data2 != 0) {
        data = data1 / data2;
      } else {
        data = 0;
      }
      break;
  }
  return data;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: "0", //计算结果
    id1: "history", //历史
    id2: "clear", //清除
    id3: "back", //回退
    id4: "dic", //除
    id5: "num_7",
    id6: "num_8",
    id7: "num_9",
    id8: "mul",
    id9: "num_4",
    id10: "num_5",
    id11: "num_6",
    id12: "sub", //减
    id13: "num_1",
    id14: "num_2",
    id15: "num_3",
    id16: "add", //加
    id17: "negative", //取负
    id18: "num_0",
    id19: "dot", //小数点
    id20: "equ", //等号
    temp: "temp", //
    lastoper: "lastoper1", //
    flag: "flag", //
  },

  clickBtn: function (e) { //单击时间处理函数
    var data = this.data.result;//获取上一个结果值

    var tmp = this.data.temp; //取上次的临时结果
    var lastoper1 = this.data.lastoper;//上一次的运算符
    var noNumFlag = this.data.flag;//上一次非数字按钮标志

    if (e.target.id >= 'num_0' && e.target.id <= 'num_9') {
      data += e.target.id.split("_")[1];
      if (this.data.result == '0'|| noNumFlag) {
        data = e.target.id.split("_")[1];
      }
    } else {//不是数字数组
      noNumFlag = true;
      console.log(e.target.id);
      if ("dot" == e.target.id) {//小数点
        if (data.toString().indexOf(".") == -1) {
          data += ".";
        }
      } else if ("clear" == e.target.id) {//清除按钮
        data = 0;
        tmp = 0;
        lastoper1 = "+";
      } else if ("negative" == e.target.id) {//取正负
        data = -1 * data;
      } else if ("back" == e.target.id) {//回退一个字符
        if (data.toString().length > 1) {
          data = data.substr(0, data.toString().length - 1);
        } else {
          data = 0;
        }
      } else if ("div" == e.target.id) {//除法
        data = calculate(tmp, lastoper1, data);
        tmp = data;
        lastoper1 = "/";
      } else if ("mul" == e.target.id) {//乘法
        data = calculate(tmp, lastoper1, data);
        tmp = data;
        lastoper1 = "*";
      } else if ("sub" == e.target.id) {//减法
        data = calculate(tmp, lastoper1, data);
        tmp = data;
        lastoper1 = "-";
      } else if ("equ" == e.target.id) {//等号
        data = calculate(tmp, lastoper1, data);
        tmp = data;
        lastoper1 = "+";
      }
      this.setData({
        result: data,
        lastoper: lastoper1,
        temp: tmp,
        flag: noNumFlag
      })
    }
    this.setData({
      result: data
    });
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