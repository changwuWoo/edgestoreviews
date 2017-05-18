import fetch from '../config/fetch'
/**
 * 创建临时数据
 */
const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

  /**
   * 获取短信验证码
   */

var mobileCode = phone => fetch('POST', '/v4/mobile/verify_code/send', {
  mobile: phone,
  scene: 'login',
  type: 'sms'
})

var getcaptchas = () => fetch('POST', '/v1/captchas', {})

  /**
   * 账号密码登录
   */

var accountLogin = (fname, fpassword) => fetch('POST', '/ua/userlogin', {fname, fpassword})

var accessTokenLogin = (token) => fetch('POST', '/ua/tokenLogin', {token})

  /**
   * 检测帐号是否存在
   */

var checkExsis = (checkNumber, type) => fetch('GET', '/v1/users/exists', {
  [type]: checkNumber,
  type
})

  /**
   * 获取用户信息
   */

var getUser = () => fetch('GET', '/v1/user', {})

export {mobileCode, accountLogin, checkExsis, getcaptchas, getUser, accessTokenLogin}
