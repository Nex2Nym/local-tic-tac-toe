export const settings = {
    namespaced: true,

    state: {
        darkTheme: false,
        //role: ''
    },

    getters: {
        getTheme(state){
            return state.darkTheme
        },
        /*getRole(state){
            return state.role
        }*/
    },

    mutations: {
        changeTheme(state){
            state.darkTheme = !state.darkTheme
        },
        /*changeRole(state, userRole) {
            state.role = userRole
        }*/
    },

    actions: {
        switchTheme({commit}){
            commit('changeTheme')
        },
        /*pickRole({commit}, userRole){
            commit('changeRole', userRole)
        }*/
    }
}