import {
  RECEIVE_HOME_DATA,

} from './mutation-types'


export default {
  [RECEIVE_HOME_DATA] (state, {homeData}) {
    state.homeData = homeData
  }
}
