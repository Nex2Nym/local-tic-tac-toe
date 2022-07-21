<template>
  <v-app :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
    <v-row>
      <v-spacer></v-spacer>
      <v-col class="mt-6" cols="2" md="1">
        <v-btn class="ml-8" icon :color="darkTheme ? 'secondary' : 'primary'" @click="switchTheme">
          <v-icon large>{{ darkTheme ? 'mdi-weather-night' : 'mdi-white-balance-sunny'}}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {

  data(){
    return {
    }
  },

  computed: {
    ...mapGetters({
      darkTheme: 'settings/getTheme'
    }),
  },

  methods: {
    ...mapActions({
      switchTheme: 'settings/switchTheme'
    }),
  },
  
  name: 'App'
};
</script>
