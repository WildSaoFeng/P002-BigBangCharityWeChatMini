// pages/projects/projects.js

const {
  extend,
  Stepper,
  Select,
  Field,
  Toast
} = require('../../lib/index');


Page(extend({}, Toast, Stepper, Select, Field, {

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      { url: '../../images/p4.jpeg' },
      { url: '../../images/p3.jpeg' },
      { url: '../../images/p2.jpeg' },
      { url: '../../images/p1.jpeg' }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2800,
    duration: 600,
    userInfo: {}
  },

  showToast() {
    if (first) {
      this.showZanToast('恭喜您！\n成功完成捐赠！\n请等待志愿者联系您！');
      first = false;
    } else {
      this.showZanToast('您已经下单！\n请勿重复提交！');
    }
  },

  handleZanSelectChange({
    componentId,
    value
  }) {
    this.setData({
      [`checked.${componentId}`]: value
    });
  },
  handleZanStepperChange(e) {
    var componentId = e.componentId;
    var stepper = e.stepper;

    this.setData({
      [`${componentId}.stepper`]: stepper
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

  },
  dlb_finishedToast() {
    this.showZanToast('大礼包-项目已经结束，感谢您的参与！');
  },
  dy_finishedToast() {
    this.showZanToast('冬衣-项目已经结束，感谢您的参与！');
  },
  hc_finishedToast() {
    this.showZanToast('汇晨-项目已经结束，感谢您的参与！');
  },
  yt_finishedToast() {
    this.showZanToast('益童-项目已经结束，感谢您的参与！');
  },
  notStartToast() {
    this.showZanToast('志愿项目正在筹备，敬请期待！');
  },
}));
