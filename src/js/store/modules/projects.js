const state = {
    project: ''
};

const mutations = {
    updateProject: (context, value) => {
        state.project = value;
    }
};

const actions = {
    updateProject: (context, value) => {
        context.commit('updateProject', value);
    }
};

const getters = {
    getProject: () => state.project
};

export default {
    state,
    actions,
    getters,
    mutations
};
