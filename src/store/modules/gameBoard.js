export const gameBoard = {
    namespaced: true,

    state: {
        id: '0',
        //P1: false,
        //P2: false,
        CurrentTurn: 'P1',
        Game: ['', '', '', '', '', '', '', '', ''],
        Winner: ''
    },

    getters: {
        /*areTwoActivePlayers(state){
            if(state.P1 && state.P2)
                return true
            else
                return false
        },
        isP1Active(state){
            return state.P1
        },
        isP2Active(state){
            return state.P2
        },*/
        getCurrentTurn(state){
            return state.CurrentTurn
        },
        getBoard(state){
            return state.Game
        },
        getWinner(state){
            return state.Winner
        }
    },

    mutations: {
        /*changeP1(state){
            state.P1 = !state.P1
        },
        changeP2(state){
            state.P2 = !state.P2
        },*/
        updateBoard (state, move){
            state.Game[move.id] = move.value
        },
        setNextTurn(state, player){
            state.CurrentTurn = player
        },
        setWinner(state, winner){
            state.Winner = winner
        },
        reset(state){
            state.CurrentTurn = 'P1',
            state.Game= ['', '', '', '', '', '', '', '', ''],
            state.Winner= ""
        }
    },

    actions: {
        /*switchP1({commit}){
            commit('changeP1')
        },
        switchP2({commit}){
            commit('changeP2')
        },*/
        addMove({commit}, move){
            commit('updateBoard', move)
        },
        nextTurn({commit}, player){
            commit('setNextTurn', player)
        },
        selectWinner({commit}, winner){
            commit('setWinner', winner)
        },
        resetGame({commit}){
            commit('reset')
        }
    }
}
