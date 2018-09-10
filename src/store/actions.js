import {
  reqHome,
  reqCate,
  reqCategoryList,
  reqTopic,
} from '../api'

import {
  RECEIVE_HOME,
  RECEIVE_CATE,
  RECEIVE_CATEGORY_LIST,
  RECEIVE_TOPIC,
  RESET_FIRST,
  RESET_DOWNLOAD_SHOW,
  RESET_CLOSE_MASK
} from './mutation-types'
export default {
  //异步获取主页信息
  async getHome({commit}, cb) {
    const result = await reqHome()
    if (result.code === 0) {
      commit(RECEIVE_HOME, {homeData: result.data})
      cb && cb()
    }
  },
  //异步获取主页信息
  async getCate({commit}, cb) {
    const result = await reqCate()
    if (result.code === 0) {
      commit(RECEIVE_CATE, {cate: result.data})
      cb && cb()
    }
  },
  //异步获取识物页信息
  async getTopic({commit}, cb) {
    const result = await reqTopic()
    if (result.code === 0) {
      commit(RECEIVE_TOPIC, {topic: result.data})
      cb && cb()
    }
  },
  //异步获取分类页信息
  async getCategoryList({commit}, cb) {
    const result = await reqCategoryList()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORY_LIST, {categoryList: result.data})
      cb && cb()
    }
  },
  goTo ({commit}) {
    commit(RESET_FIRST)
  },
  resetDownloadShow ({commit}) {
    commit(RESET_DOWNLOAD_SHOW)
  },
  closeMask ({commit}) {
    commit(RESET_CLOSE_MASK)
  }
}
