const CONST = {
  ACCESS_TOKEN: 'access_token',
  AUTHORIZATION: 'authorization',
  HOMEPAGE: '/',
  LOGINPAGE: '/login'
}
// 访问排除页面
const excludeUrl = [CONST.HOMEPAGE, CONST.LOGINPAGE]

/*
 * 用户如果认证返回true
 */
function isAuth () {
  return !!getAccessToken()
}

/*
 * 获取accessToken
 */
function getAccessToken () {
  return localStorage.getItem(CONST.ACCESS_TOKEN)
}

/*
 * 存储accessToken
 */
function saveAccessToken (accessToken) {
  localStorage.setItem(CONST.ACCESS_TOKEN, accessToken)
}

/*
 * 认证服务
 */
function authService (router) {
  router.beforeEach((to, from, next) => {
    const url = to.path
    // 访问的不是排除页面，并且没有认证，则跳转到登录页面
    if ((excludeUrl.indexOf(url)) === -1 && !isAuth()) {
      next({
        path: CONST.LOGINPAGE
      })
    }
    else {
      next()
    }
  })
}

export default {
  authService,
  token: {
    isAuth,
    get: getAccessToken,
    save: saveAccessToken
  },
  CONST
}
