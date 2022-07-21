<template>
    <v-container elevation="0">
      <v-row>
        <v-col cols="1" md="3"></v-col>
        <v-col class="text-center" cols="8" md="5" style="font-size: 2.4rem;">
            {{msg}}
        </v-col>
        <v-col class="justify-center align-center" cols="2" md="1" v-if="turn == 'P1'">
          <v-img contain src="@/assets/X.png" max-height="50"> </v-img>
        </v-col>
        <v-col class="justify-center align-center" cols="2" md="1" v-if="turn == 'P2'">
          <v-img contain src="@/assets/O.png" max-height="50"> </v-img>
        </v-col>
        <v-col cols="1" md="3"></v-col>
      </v-row>
      <v-row class="ma-0 pa-0">
        <v-col cols="1" md="3"> </v-col>
        <v-col cols="10" md="6">
          <GameBoardComponent/>
        </v-col>
        <v-col cols="1" md="3"> </v-col>
      </v-row>
      <v-dialog max-width="340" transition="dialog-top-transition" v-model="winnerDialog">
        <v-card class="justify-center" height="130" style="font-size: 1.6rem;">
          <v-row class="ma-0 pa-0 justify-center align-center">
            <v-col cols="10" class="d-flex justify-center align-center">
                {{winnerMsg}}
            </v-col>
            <v-col cols="10" class="d-flex justify-center align-center">
                <v-btn block class="ma-0 pa-0" plain style="font-size: 1.2rem;" :color="darkTheme ? 'secondary' : 'primary'" @click="reset()"> Restart </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GameBoardComponent from '@/components/GameBoardComponent.vue'

export default {
  data(){
    return{
      msg: "It's Player 1's Turn!",
      winnerDialog: false,
      winnerMsg: ""
    }
  },

  created(){
    this.gameMessages()
  },

  computed: {
    ...mapGetters({
      darkTheme: 'settings/getTheme',
      turn: 'gameBoard/getCurrentTurn',
      winner: 'gameBoard/getWinner'
    }),
    winnerCheck(){
        if (this.winner != ''){
            this.winnerMsg = this.winner == 'P1' ? 'Our winner is Player 1!' : this.winner == 'P2' ? 'Our winner is Player 2!' : "It's a tie!"
            this.winnerDialog = true
        }
    }
  },

  methods: {
    ...mapActions({
        resetGame: 'gameBoard/resetGame'
    }),
    gameMessages(){
      if (this.turn == 'P1'){
        this.msg = "It's Player 1's Turn!"
      } else if (this.turn == 'P2'){
        this.msg = "It's Player 2's Turn!"
      } /*
      if (this.turn == this.role) {
        this.msg += " Now it's your turn"
      } else if (this.turn != this.role && this.role != ""){
        this.msg += " Now it's your opponent's turn"
      }*/
      this.$forceUpdate();
    },
    reset(){
        this.winnerDialog = false
        this.winnerMsg = ''
        this.resetGame()
    }
  },

  components: {
    GameBoardComponent
  },
  
  name: 'GameView'
}
</script>