//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    make_pro: 0,
    make_num: 0,
    make_love: 0,
    isSaoFeng: false
  },
  //事件处理函数
  bindViewTap1: function () {
    wx.navigateTo({
      url: '../good/good'
    })
  },
  bindViewTap2: function () {
    wx.navigateTo({
      url: '../projectList/projectList'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
    if(app.globalData.userInfo.nickName=='CellPhone'){
      console.log('You Are SaoFeng!');
      this.setData({
        make_pro: 4,
        make_num: 34,
        make_love: 608,
        isSaoFeng: true,
      });
    }
  }
})
