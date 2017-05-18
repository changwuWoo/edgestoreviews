/**
 * Created by Administrator on 2017/5/16.
 */
import util from '../../config/utils'
export default {
  // 用户登录状态
  loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
  // 用户登录信息
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
  // 用户数据信息
  userData: [],
  loginToken: util.token.get
}
