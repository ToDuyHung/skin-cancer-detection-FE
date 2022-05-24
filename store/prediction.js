export const state = () => ({
  result: [],
})
export const getters = {
  getResult: (state) => {
    return state.result
  },
}
export const mutations = {
  update(state, result) {
    state.result = result
  },
}
