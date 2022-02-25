import { Commit } from 'vuex'
import { ModuleType } from './module-type'

interface IState {
  darkMode: boolean
  appLoading: boolean
}

const mutation_types = {
  SET_DARK_MODE: 'SET_DARK_MODE',
  SET_APP_LOADING: 'SET_APP_LOADING',
}

export default <ModuleType>{
  namespaced: true,
  state: (): IState => ({
    darkMode: false,
    appLoading: false,
  }),
  getters: {
    darkMode: (state: IState) => state.darkMode,
    appLoading: (state: IState) => state.appLoading,
  },
  actions: {
    setDarkMode({ commit }: { commit: Commit }, darkMode: boolean) {
      commit(mutation_types.SET_DARK_MODE, darkMode)
    },
  },
  mutations: {
    [mutation_types.SET_DARK_MODE](state: IState, darkMode: boolean) {
      state.darkMode = darkMode
    },
  },
}
