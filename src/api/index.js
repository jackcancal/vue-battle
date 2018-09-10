

import ajax from './ajax'

export const reqHome = () => ajax('/home')
export const reqCate = () => ajax('/cate')
export const reqCategoryList = () => ajax('/nav')
export const reqTopic = () => ajax('/topic')

