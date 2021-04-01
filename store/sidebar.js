export const state = () => ({
  active: false,
});

export const getters = {
  active: state => state.active,
}

export const mutations = {
  SET_ALL(state, data) {
    Object.assign(state, data);
    return state;
  },
};

export const actions = {
  open({ commit }) {
    commit('SET_ALL', {
      active: true,
    });
  },
  close({ commit }) {
    commit('SET_ALL', {
      active: false,
    });
  }
};
