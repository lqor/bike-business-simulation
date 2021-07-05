<template>
  <v-container id="charts" ref="myid">
    <v-row class="pa-6 text-left">
      <v-col>
        <v-card>
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
            Budget distribution
          </v-card-title>
          <pie-chart />
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
            Budget changes
          </v-card-title>
          <line-chart />
        </v-card>
      </v-col>
    </v-row>
    <div id="overlay">
    </div>

    <v-row class="pa-6 text-left">
      <v-col>
        <v-card>
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
            Current round statistic
          </v-card-title>
          <bar-chart />
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white" ref="allRoundsCard">
            All rounds comparison
          </v-card-title>
          <radar-chart />
        </v-card>
      </v-col>
    </v-row>    
  </v-container>
</template>

<script>
import lineChart from "./lineChart.vue";
import pieChart from "./pieChart.vue";
import barChart from "./barChart.vue";
import radarChart from "./radarChart.vue";

export default {
  components: {lineChart, pieChart, barChart, radarChart},
  props:['teamColor'],
  methods: {
    getElementByid() {
      this.$refs.myid.style.opacity = 0.5;
    }
  },
  mounted() {
    this.getElementByid();
  }
}
</script>

<style scoped>
.overlay {
  z-index: 9;
  margin: 30px;
  background: #009938;
}
</style>
