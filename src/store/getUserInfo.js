export const stateUser = {
    namespaced: true,
    state: {
        role: null,
        name: null
    }
}

export const actionsUser = {
    setRole: ({ commit }, payload) => commit('SET_ROLE', payload),
    setName: ({ commit }, payload) => commit('SET_NAME', payload)
}
 
export const mutationsUser = {
    SET_ROLE: (state, payload) => { state.role = payload.data },
    SET_NAME: (state, payload) => { state.name = payload.data }
}

export const gettersUser = {
    getRole: state => state.role,
    getName: state => state.name
}