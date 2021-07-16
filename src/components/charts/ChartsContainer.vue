<template>
  <v-container id="charts" ref="myid">
    <v-row class="pa-6 text-left">
      <v-col>
        <v-card>
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
            Overall Employee Satisfaction - Team Comparison
          </v-card-title>
          <employees-satisfaction-all />
        </v-card>
      </v-col>
    </v-row>   

    <v-row class="pa-6 text-left">
      <v-col>
        <v-card>
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
            Your Employees Satisfaction - Each Step
          </v-card-title>
          <employees-satisfaction-steps />
        </v-card>
      </v-col>
    </v-row>   

    <v-row class="pa-6 text-left">
      <v-col>
        <v-card>
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
            Employees Satisfaction {{'- ' + selectedProcess}} 
          </v-card-title>
           <v-select
            v-model="selectedProcess"
            :items="processes"
            :color="teamColor"
            label="Select process"
            item-text="name"
            style="margin: 10px"
          />

          <br />

          <employees-satisfaction-details :selectedProcess="selectedProcess" />
        </v-card>
      </v-col>
    </v-row>   

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
import EmployeesSatisfactionSteps from './EmployeesSatisfactionSteps.vue';
import EmployeesSatisfactionAll from './EmployeesSatisfactionAll.vue';
import EmployeesSatisfactionDetails from './EmployeesSatisfactionDetails.vue';

export default {
  components: {
    lineChart, 
    pieChart, 
    barChart, 
    radarChart, 
    EmployeesSatisfactionSteps, 
    EmployeesSatisfactionAll, 
    EmployeesSatisfactionDetails
  },
  data() {
    return {
      teamColor: this.$store.state.color,
      selectedProcess: 'Battery Preparation',
      processes: [
        'Battery Preparation', 
        'Frame Preparation', 
        'Engine Preparation', 
        'Sensor Preparation', 
        'Bike Assembly', 
        'Application & Development', 
        'Logistic'
      ]
    }
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
