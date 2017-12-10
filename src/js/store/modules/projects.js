const state = {
    project: ''
};

const mutations = {
    updateProject( state, value ) {
        state.project = value;
    }
};

const actions = {
    updateProject: function(context, value) {
        context.commit('updateProject', value)
    }
};

const getters = {
    getProject: function(state) {
        return state.project;
    }
};


export default {
    state,
    actions,
    getters,
    mutations
}