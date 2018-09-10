export default {
  headCateList (state) {
    return state.homeData.headCateList
  },
  homeSwiperList (state) {
    return state.homeData.focusList
  },
  policyDescList (state) {
    return state.homeData.policyDescList
  },
  //品牌制造商直供 (tagList)
  showTagList (state) {
    if (state.homeData.tagList) return state.homeData.tagList.splice(0, 4)
  },
  //新品首发下的item (newItemNewUserList)
  NewItem (state) {
    return state.homeData.newItemNewUserList
  },
  //人气推荐下的item (popularItemList)
  popularItemList (state) {
    return state.homeData.popularItemList
  },
  //限时购数据
  limitGoods (state) {
    if (state.homeData.countDown) return state.homeData.countDown[0]
  },
  //专题精选下item (topicList)
  topicList (state) {
    return state.homeData.topicList
  },
  cateList (state) {
    return state.homeData.cateList
  }
}
