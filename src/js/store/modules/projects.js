const state = {
    project: ''
};

const mutations = {
    updateProject: ( state, value ) => {
        state.project = value;
    }
};

const actions = {
    updateProject: (context, value) => {
        context.commit('updateProject', value)
    }
};

const getters = {
    getProject: (state) => {
        return state.project;
    }
};


export default {
    state,
    actions,
    getters,
    mutations
}