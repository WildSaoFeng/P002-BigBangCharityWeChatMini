// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userLocation:{},
    defaultLocation:{
      longitute: 116.283696,
      latitude: 40.170167,
    },
    defaultMarkers:[{
      latitude: 40.170167,
      longitude: 116.283696,
      name: '中央财经大学沙河校区',
      iconPath: '../../images/icon/page2-f.png',
      desc: '现在位置',
      width: 25,
      height: 25,
      alpha: 0.5,
      label: {
        content:'中央财经大学信息学院青协',
      },
    }, {
      latitude: 39.966596,
      longitude: 116.374054,
      name: '中国同心相随志愿者发展中心',
      iconPath: '../../images/icon/page2-f.png',
      desc: '现在位置',
      width: 25,
      height: 25,
      alpha: 0.5,
      label: {
        content: '中国同心相随志愿者发展中心',
      },
      }, {
        latitude: 40.002898,
        longitude: 116.380234,
        name: '北京市牡丹园志愿者协会',
        iconPath: '../../images/icon/page2-f.png',
        desc: '现在位置',
        width: 25,
        height: 25,
        alpha: 0.5,
        label: {
          content: '北京市牡丹园志愿者协会',
        },
      }],
    userHasLocation: false,
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