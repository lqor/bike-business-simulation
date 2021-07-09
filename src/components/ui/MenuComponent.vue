<template>
  <v-navigation-drawer app permanent expand-on-hover fixed :color="teamColor">
        <v-list-item to="dashboard">
          <v-list-item-icon>
            <v-icon style="color:white">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="list-item">Dashboard</v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list-item :to="charts">
          <v-list-item-icon >
            <v-icon style="color:white">mdi-chart-line</v-icon>
          </v-list-item-icon>
           <v-list-item-title  class="list-item">Statistics</v-list-item-title>
        </v-list-item>

        <v-list-item @click="showTodo">
          <v-list-item-icon >
            <v-icon style="color:white">mdi-list-status</v-icon>
          </v-list-item-icon>
           <v-list-item-title  class="list-item">Show todo</v-list-item-title>
        </v-list-item>
        
        <v-list-item @click="toggleChat">
          <v-list-item-icon >
            <v-icon style="color:white">mdi-pencil-circle-outline</v-icon>
          </v-list-item-icon>
           <v-list-item-title  class="list-item">Write to admin</v-list-item-title>
        </v-list-item>

        <v-list-item @click="toggleRoundRules">
          <v-list-item-icon>
            <v-icon style="color:white">mdi-help-circle-outline</v-icon>
          </v-list-item-icon>
            <v-list-item-title class="list-item">Round Rules</v-list-item-title>
        </v-list-item>

        <v-list-item @click="toggleGeneralRules">
          <v-list-item-icon>
            <v-icon style="color:white">mdi-help-circle</v-icon>
          </v-list-item-icon>
            <v-list-item-title class="list-item">General Rules</v-list-item-title>
        </v-list-item>

  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['calculatedProgressElements', 'round'],
  methods: {
    showTodo() {
      this.$emit('showTodo');
    },
    toggleRoundRules() {
      this.$emit('toggleRoundRules');
    },
    toggleGeneralRules() {
          // console.log(this.$store.state['count']);

      this.$emit('toggleGeneralRules');
    },
    toggleChat() {
      this.$emit('toggleChat');
    },
    endRound() {
      this.$emit('endRound');
    }
  },
  data() {
    return {
      charts: "/charts",
      teamColor: this.$store.state.color
    }
  }
}
</script>


<style scoped>
.list-item {
  text-align: left;
  color:white;
}
</style>