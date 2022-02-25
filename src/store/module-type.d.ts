import { MutationTree } from 'vuex'

export type ModuleType = {
  namespaced: boolean
  state: () => Record<string, any>
  getters: Record<string, any>
  actions: Record<string, any>
  mutations: MutationTree<any>
}
