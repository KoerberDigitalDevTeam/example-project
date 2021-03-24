const initialState = {
  isSidebarOpen: false,
};

const actions = {
  toggleSidebar({ commit }, response) {
    commit('TOGGLE_SIDEBAR', response);
  },
};

const mutations = {
  TOGGLE_SIDEBAR: (state, data) => {
    state.isSidebarOpen = data;
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
