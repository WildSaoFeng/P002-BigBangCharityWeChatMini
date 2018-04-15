// pages/donation/donation.js
const {
  extend,
  Stepper,
  Select,
  Field,
  Toast
} = require('../../lib/index');

var first = true;

const config = require('./config');

Page(extend({}, Toast, Stepper, Select, Field, {

  /**
   * 页面的初始数据
   */
  data: {

    config,
    showBottomPopup: false,
    // Stepper
    stepper1: {
      stepper: 0,
      min: 0,
      max: 2,
    },
    stepper2: {
      stepper: 0,
      min: 0,
      max: 1,
    },
    stepper3: {
      stepper: 0,
      min: 0,
      max: 4,
    },
    stepper4: {
      stepper: 0,
      min: 0,
      max: 2,
    },
    stepper5: {
      stepper: 0,
      min: 0,
      max: 4,
    },
    stepper6: {
      stepper: 0,
      min: 0,
      max: 2,
    },
    // Selectors
    items: [{
      padding: 0,
      value: '1',
      name: '方式（A） 通过快递物流寄送',
    }, {
      padding: 0,
      value: '2',
      name: '方式（B） 分配附近志愿者上门取货',
    }, {
      padding: 0,
      value: '3',
      name: '方式（C） 将物品带至最近募捐点',
    },],
    checked: {
      base: -1,
      color: -1,
      form: -1
    },

    activeColor: '#4b0',
  },

  toggleBottomPopup() {
    this.setData({
      showBottomPopup: !this.data.showBottomPopup
    });
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

  }
}));