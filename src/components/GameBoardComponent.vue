<template>
  <v-card class="rounded-0 ma-0 pa-0" elevation="0" id="gb" :style="darkTheme ? { background : $vuetify.theme.themes.light.secondary} : { background : $vuetify.theme.themes.light.primary}">
    <v-row class="ma-0 pa-0" no-gutters>
      <v-col class="pr-1 pl-0 pt-0 pb-1 align-stretch" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[0] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[0] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center ma-0 pa-0" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(0)">
        </v-card>
      </v-col>

      <v-col class="pr-1 pl-1 pt-0 pb-1" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[1] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[1] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(1)">
        </v-card>
      </v-col>
      <v-col class="pr-0 pl-1 pt-0 pb-1" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[2] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[2] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(2)">
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0" no-gutters>
      <v-col class="pr-1 pl-0 pt-1 pb-1" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[3] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[3] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(3)">
        </v-card>
      </v-col>
      <v-col class="pr-1 pl-1 pt-1 pb-1" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[4] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[4] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(4)">
        </v-card>
      </v-col>
      <v-col class="pr-0 pl-1 pt-1 pb-1" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[5] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[5] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(5)">
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0" no-gutters>
      <v-col class="pr-1 pl-0 pt-1 pb-0" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[6] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[6] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(6)">
        </v-card>
      </v-col>
      <v-col class="pr-1 pl-1 pt-1 pb-0" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[7] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[7] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(7)">
        </v-card>
      </v-col>
      <v-col class="pr-0 pl-1 pt-1 pb-0" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[8] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[8] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(8)">
        </v-card>
      </v-col>
    </v-row>
     <v-dialog max-width="340" transition="dialog-top-transition" v-model="winnerDialog">
        <v-card class="justify-center" height="130" style="font-size: 1.6rem;">
          <v-row class="ma-0 pa-0 justify-center align-center">
            <v-col cols="10" class="d-flex justify-center align-center">
                {{winnerMsg}}
            </v-col>
            <v-col cols="10" class="d-flex justify-center align-center">
                <v-btn block class="ma-0 pa-0" plain style="font-size: 1.2rem;" :color="darkTheme ? 'secondary' : 'primary'" @click="reset"> Restart </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
  </v-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    created(){
      this.resetGame()
    },
    data(){
      return{
        winnerDialog: false,
        winnerMsg: ""
      }
    },
    computed: {
      ...mapGetters({
        darkTheme: 'settings/getTheme',
        board: 'gameBoard/getBoard',
        currentTurn: 'gameBoard/getCurrentTurn',
        winner: 'gameBoard/getWinner'
      }),
    },
    methods: {
      ...mapActions({
        addMove: 'gameBoard/addMove',
        nextTurn: 'gameBoard/nextTurn',
        selectWinner: 'gameBoard/selectWinner',
        resetGame: 'gameBoard/resetGame'
      }),

      boardChecker(){
        if(this.board[0] == this.board[1] && this.board[0] == this.board[2]){
          if(this.board[0] == 'X'){
            this.selectWinner('P1')
            this.nextTurn('')
          } else if(this.board[0] == 'O'){
            this.selectWinner('P2')
            this.nextTurn('')
          }
        } else if(this.board[3] == this.board[4] && this.board[3] == this.board[5]){
          if(this.board[3] == 'X'){
            this.selectWinner('P1')
            this.nextTurn('')
          } else if(this.board[3] == 'O'){
            this.selectWinner('P2')
            this.nextTurn('')
          }
        } else if(this.board[6] == this.board[7] && this.board[6] == this.board[8]){
          if(this.board[6] == 'X'){
            this.selectWinner('P1')
            this.nextTurn('')
          } else if(this.board[6] == 'O'){
            this.selectWinner('P2')
            this.nextTurn('')
          }
        } else if(this.board[0] == this.board[3] && this.board[0] == this.board[6]){
          if(this.board[0] == 'X'){
            this.selectWinner('P1')
            this.nextTurn('')
          } else if(this.board[0] == 'O'){
            this.selectWinner('P2')
            this.nextTurn('')
          }
        } else if(this.board[1] == this.board[4] && this.board[1] == this.board[7]){
          if(this.board[1] == 'X'){
            this.selectWinner('P1')
            this.nextTurn('')
          } else if(this.board[1] == 'O'){
            this.selectWinner('P2')
            this.nextTurn('')
          }
        } else if(this.board[2] == this.board[5] && this.board[2] == this.board[8]){
          if(this.board[2] == 'X'){
            this.selectWinner('P1')
            this.nextTurn('')
          } else if(this.board[2] == 'O'){
            this.selectWinner('P2')
            this.nextTurn('')
          }
        } else if(this.board[0] == this.board[4] && this.board[0] == this.board[8]){
          if(this.board[0] == 'X'){
            this.selectWinner('P1')
            this.nextTurn('')
          } else if(this.board[0] == 'O'){
            this.selectWinner('P2')
            this.nextTurn('')
          }
        } else if(this.board[2] == this.board[4] && this.board[2] == this.board[6]){
          if(this.board[2] == 'X'){
            this.selectWinner('P1')
            this.nextTurn('')
          } else if(this.board[2] == 'O'){
            this.selectWinner('P2')
            this.nextTurn('')
          }
        } else if (this.board[0] != '' && this.board[1] != '' && this.board[2] != '' && this.board[3] != '' && this.board[4] != '' && this.board[5] != '' && this.board[6] != '' && this.board[7] != '' && this.board[8] != ''){
            this.selectWinner('tie')
            this.nextTurn('')
        }
        this.$forceUpdate()
        this.winnerCheck()
      },

      newMove(index){
        let move = {
            id: 10,
            value: ''
        }
        if (this.currentTurn == 'P1'){
          //console.log('x')
          move.id = index
          move.value = 'X'
          this.addMove(move)
          this.nextTurn('P2')
        } else if (this.currentTurn == 'P2'){
          //console.log('o')
          move.id = index
          move.value = 'O'
          this.addMove(move)
          this.nextTurn('P1')
        }
        this.boardChecker()
        this.$forceUpdate()
      },

      reset(){
        this.$router.go()
      },
      winnerCheck(){
          if (this.winner != ''){
              this.winnerMsg = this.winner == 'P1' ? 'Our winner is Player 1!' : this.winner == 'P2' ? 'Our winner is Player 2!' : "It's a tie!"
              this.winnerDialog = true
          }
      }
    },

    watch:{
        currentTurn(val){
            this.$forceUpdate();
        }
    },

    name: 'GameBoardComponent',
  }
</script>