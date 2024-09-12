const _ = require('lodash')
const URI = require('urijs')
const {userLinkRules} = require('./config')

/**
 * 根据用户对象获取用户链接
 * @param {Object} ctx 对象
 * @param {String} def 字符串
 * @returns 用户链接
 */
function getProfileUrl(ctx) {
  if (!ctx || ctx.constructor !== Object || !ctx.user || ctx.user.constructor !== Object || Object.keys(ctx.user).length === 0) {
    return ''
  }
  const user = ctx.user
  const uri = ctx.uri || ctx.url || ''
  const domain = ctx.domain || URI(uri).domain() || ''
  // console.log('domain ==>', domain)
  // console.log('user ==>', user)
  let profileUrl = (user && (user.profile_url || user.uri || user.url)) || ''
  if (profileUrl && typeof profileUrl === 'string') return profileUrl
  const possibleProperties = ['id', 'user_id', 'token', 'id_str', 'biz']
  if (!domain) return ''
  if (!possibleProperties.some((key) => user[key])) return ''

  // 根据 domain 判断要用到的用户id字段
  try {
    const rule = userLinkRules[domain]
    if (!rule) return ''
    const idKey = rule['idKey'] || ''
    const idValue = (idKey && user[idKey]) || user.biz || user.id_str || user.user_id || user.token || ''
    let isSelfMedia = true
    if (rule['method'] && _.isFunction(rule['method']) && rule['self_media']) {
      isSelfMedia = rule['method'](uri, user)
    }
    const urlRule = isSelfMedia && rule['self_media'] ? rule['self_media']['url'] : rule['default']['url'] || ''
    // console.log('urlRule ==>', urlRule)
    if (!idValue || !urlRule) return ''
    profileUrl = urlRule.replace(/{{idKeyValue}}/g, idValue) || ''
  } catch (error) {
    console.error(error.message)
  }

  return profileUrl
}

exports.getProfileUrl = getProfileUrl
