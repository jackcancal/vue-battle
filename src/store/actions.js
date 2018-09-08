import {
  reqHome,
} from '../api'

import {
  RECEIVE_HOME_DATA,

} from './mutation-types'
export default {
  //异步获取主页信息
  async getHomeData({commit}) {
    const result = await reqHome()
    if (result.code === 0) {
      commit(RECEIVE_HOME_DATA, {homeData: result.data})
    }
  }
}
