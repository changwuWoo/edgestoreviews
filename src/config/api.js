import fetch from '../config/fetch'

/**
 * 获取短信验证码
 */
const mobileCode = phone => fetch('POST', '/v4/mobile/verify_code/send', {
  mobile: phone,
  scene: 'login',
  type: 'sms'
})

/**
 * 账号密码登录
 */

const accountLogin = (data) => fetch('POST', '/ua/userLogin', (data))

const accessTokenLogin = (data) => fetch('GET', '/ua/tokenLogin', (data))

/**
 * 检测帐号是否存在
 */

const checkExtis = (checkNumber, type) => fetch('GET', '/v1/users/exists', {
  [type]: checkNumber,
  type
})

/**
 * 获取用户信息
 */

const getUsers = (data) => fetch('GET', '/auth/getUsers', (data))

const loginOut = (data) => fetch('GET', '/auth/getUser', (data))
export default {mobileCode, accountLogin, checkExtis, getUsers, accessTokenLogin, loginOut}
