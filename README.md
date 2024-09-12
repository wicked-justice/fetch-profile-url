## 功能
- 获取用户的个人主页链接

## 使用

```bash
const { getProfileUrl} = require('fetch-profileurl')
const ctx =  {
  uri: 'https://www.bilibili.com/opus/975133575406944258',
  uri_host: 'www.bilibili.com',
  uri_sha1: '9161e99d9161f5976919d48a0797725e25af1832',
  user: {
    has_followers: 'NO',
    screen_name: '融中财经',
    src: 'none',
    user_name: '融中财经',
    user_id: '535586180'
  }
}
const profileUrl = getProfileUrl(ctx)
```

