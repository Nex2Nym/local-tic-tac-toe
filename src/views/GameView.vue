<template>
    <v-container elevation="0">
      <v-row>
        <v-col cols="1" md="3"></v-col>
        <v-col class="text-end" cols="3" md="2" style="font-size: 2.7rem;">
            It's 
        </v-col>
        <v-col class="justify-center align-center" cols="2" md="1" v-if="turn == 'P1'">
          <v-img contain src="@/assets/X.png" max-height="50"> </v-img>
        </v-col>
        <v-col class="justify-center align-center" cols="2" md="1" v-if="turn == 'P2'">
          <v-img contain src="@/assets/O.png" max-height="50"> </v-img>
        </v-col>
        <v-col class="text-start" cols="3" md="2" style="font-size: 2.7rem;"> 
          's turn
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
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GameBoardComponent from '@/components/GameBoardComponent.vue'

export default {

  computed: {
    ...mapGetters({
      darkTheme: 'settings/getTheme',
      turn: 'gameBoard/getCurrentTurn',
      winner: 'gameBoard/getWinner'
    })
  },

  methods: {
    ...mapActions({
        resetGame: 'gameBoard/resetGame'
    }),
    /*gameMessages(){
      if (this.turn == 'P1'){
        this.msg = "It's Player 1's Turn!"
      } else if (this.turn == 'P2'){
        this.msg = "It's Player 2's Turn!"
      } 
      if (this.turn == this.role) {
        this.msg += " Now it's your turn"
      } else if (this.turn != this.role && this.role != ""){
        this.msg += " Now it's your opponent's turn"
      }
      this.$forceUpdate();
    },*/
    
  },

  components: {
    GameBoardComponent
  },
  
  name: 'GameView'
}
</script>