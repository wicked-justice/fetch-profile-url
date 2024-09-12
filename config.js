module.exports = {
  userLinkRules: {
    'iesdouyin.com': {
      idKey: 'biz',
      default: {
        url: 'https://www.douyin.com/user/{{idKeyValue}}'
      }
    },
    'douyin.com': {
      idKey: 'biz',
      default: {
        url: 'https://www.douyin.com/user/{{idKeyValue}}'
      }
    },
    'bilibili.com': {
      idKey: 'user_id',
      default: {
        url: 'https://space.bilibili.com/{{idKeyValue}}'
      }
    },
    'xiaohongshu.com': {
      idKey: 'biz',
      default: {
        url: 'https://www.xiaohongshu.com/user/profile/{{idKeyValue}}'
      }
    },
    'kuaishou.com': {
      idKey: 'biz',
      default: {
        url: 'https://www.kuaishou.com/profile/{{idKeyValue}}'
      }
    },
    'weibo.com': {
      idKey: 'user_id',
      default: {
        url: 'https://weibo.com/u/{{idKeyValue}}'
      }
    },
    'weixin.qq.com': {
      idKey: 'biz',
      default: {
        url: ''
      }
    },
    'toutiao.com': {
      idKey: 'token',
      default: {
        url: 'https://www.toutiao.com/c/user/token/{{idKeyValue}}'
      }
    },
    'autohome.com.cn': {
      idKey: 'user_id',
      default: {
        url: 'https://www.autohome.com.cn/ExpertBlog/editor_{{idKeyValue}}.html'
      },
      self_media: {
        idKey: 'user_id',
        url: 'https://chejiahao.autohome.com.cn/Authors/{{idKeyValue}}'
      },
      method: (...opt) => {
        const [uri, user] = opt
        if (uri.includes('chejiahao')) return true
        return false
      }
    },
    'dongchedi.com': {
      idKey: 'biz',
      default: {
        url: 'https://www.dongchedi.com/user/{{idKeyValue}}'
      }
    },
    'yiche.com': {
      idKey: 'biz',
      default: {
        url: 'https://i.yiche.com/u{{idKeyValue}}'
      }
    },
    'xchuxing.com': {
      idKey: 'user_id',
      default: {
        url: 'https://www.xchuxing.com/user/{{idKeyValue}}'
      }
    }
  }
}

// https://iesdouyin.com/share/user/MS4wLjABAAAAtF28RpHukJKiKhUblxRfpFl7vc2LwgmVpv3WGJL_L2k
// https://www.douyin.com/user/MS4wLjABAAAAtF28RpHukJKiKhUblxRfpFl7vc2LwgmVpv3WGJL_L2k
// https://space.bilibili.com/1
// https://www.xiaohongshu.com/explore/669d081e0000000025003abd
// https://www.kuaishou.com/profile/3xr7wn7q7bz93nm
// https://weibo.com/u/1234567890
// https://www.toutiao.com/c/user/token/MS4wLjABAAAAR0XdrLi_DYyIhiprckrlc6xuMBXKSbWEZ9SRzfUNKueDBc6Ys8dCDNepZlynXauG
// https://chejiahao.autohome.com.cn/Authors/8717915 // 自媒体
// https://www.autohome.com.cn/ExpertBlog/editor_8717915.html // 汽车之家
// https://www.dongchedi.com/user/2700038602498680
// https://i.yiche.com/u243781168/!all/
// https://www.xchuxing.com/user/1493qx74
