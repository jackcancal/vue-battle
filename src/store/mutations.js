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
  [RECEIVE_HOME] (state, {homeData}) {
    state.homeData = homeData
  },
  [RECEIVE_CATE] (state, {cate}) {
    state.cate = cate
  },
  [RECEIVE_CATEGORY_LIST] (state, {categoryList}) {
    state.categoryList = categoryList
  },
  [RECEIVE_TOPIC] (state, {topic}) {
    state.topic = topic
  },
  [RESET_FIRST] (state) {
    state.isFirstIn = true
  },
  [RESET_DOWNLOAD_SHOW] (state) {
    state.downloadShow = false
  },
  [RESET_CLOSE_MASK] (state) {
    state.isCloseMask = true
  },
}
