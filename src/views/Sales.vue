<template>
  <v-container id="sales">
    <!-- custom component with statistic about current, previous round and cost accounting -->
    <prev-cur-round-stats
      :prevAsmLine="'SmartLine'"
      :prevAsmLineCost="0.0"
      :prevNumOfAsmLines="0"
      :prevProdCosts="0.0"
      :prevProdCapac="0.0"
      :prevQuality="0.0"
      :prevWorkload="0.0"
      :prevSafety="0.0"
      :curAsmLine="'SmartLine'"
      :curAsmLineCost="0.0"
      :curNumOfAsmLines="0"
      :curProdCosts="0.0"
      :curProdCapac="0.0"
      :curQuality="0.0"
      :curWorkload="0.0"
      :curSafety="0.0"
      :budget="150000.0"
      :runningCosts="0.0"
      :avgProdCostBike="'Incomplete'"
      :estimatedQual="0.0"
      :maxProdCapac="'Incomplete'"
      :overDemand="40000.0"
      style="height: 500px;"
    />

    <v-divider />

    <!-- Managing sales process -->
    <v-tabs v-model="salesTabs" :color="teamColor" centered>
      <v-tab>
        Manage Sales Activities
      </v-tab>
      <v-tab>
        Manage Sales Prices
      </v-tab>
    </v-tabs>

    <!-- Manage Sales Activities -->
    <v-tabs-items v-model="salesTabs">
      <v-tab-item>
        <v-row>
          <v-col>
            <v-select
              v-model="selectedSalesActivities"
              :items="salesActivities"
              label="Additional sales activities"
              :color="teamColor"
              item-text="name"
            />

            <v-slider
              v-model="numOfSalesPers"
              label="Number of Sales Persons"
              step="1"
              :min="1"
              :max="10"
              ticks="always"
              tick-size="5"
              thumb-label="always"
              :color="teamColor"
              :thumb-color="teamColor"
              :thumb-size="24"
              :track-color="'teamColor' + 'lighten-3'"
              :track-fill-color="teamColor"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="numOfSalesPers"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  :min="1"
                  :max="10"
                  type="number"
                  style="width: 60px"
                />
              </template>
            </v-slider>
          </v-col>

          <v-col>
            <v-text-field
              label="Base salary (EUR)"
              :value="calculateCosts(selectedSalesActivities[0])"
              filled
              disabled
            />
            <v-text-field
              label="Sales Cost (EUR)"
              :value="calculateCosts(selectedSalesActivities[1])"
              filled
              disabled
            />
            <v-text-field
              label="Sales Capacity (PC)"
              :value="calculateCosts(selectedSalesActivities[2])"
              filled
              disabled
            />
          </v-col>
        </v-row>
      </v-tab-item>

      <!-- Manage Sales Prices -->
      <v-tab-item>
        <v-row>
          <v-col>
            <v-text-field
              label="Standard"
              type="number"
              min="0"
              v-model="standardPrice"
              :color="teamColor"
            />
            <v-text-field
              label="Standard Pro"
              type="number"
              min="0"
              v-model="standardProPrice"
              :color="teamColor"
            />
            <v-text-field
              label="Premium"
              type="number"
              min="0"
              v-model="premiumPrice"
              :color="teamColor"
            />
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>

    <v-row>
        <v-col md='4' align="left">
          <v-btn :color="teamColor" rounded dark @click="toPreviousStep">
            <v-icon left>mdi-arrow-left-bold-circle-outline</v-icon>
            Previous step
          </v-btn>
        </v-col>

        <v-col align="center" md="4">
          <v-btn :color="teamColor" rounded dark @click="toggleDialog" center>
            <v-icon left>mdi-check-outline</v-icon>
            Accept changes
          </v-btn>
        </v-col>
      
        <v-col md="4" align="right">
          <v-btn :color="teamColor" rounded right disabled>
            <v-icon left>mdi-arrow-right-bold-circle-outline</v-icon>
            Next step
          </v-btn>
        </v-col>
    </v-row>
    <confirmation-dialog 
      v-if="confirmChangesDialog"
      @closeDialog="toggleDialog"
      @updateProgress="updateProgress"
    ></confirmation-dialog>
  </v-container>
</template>

<script>
import prevCurRoundStats from "../components/prevCurRoundStats.vue";
import ConfirmationDialog from "../dialogs/ConfirmationDialog.vue";

export default {
  name: "sales",
  components: { prevCurRoundStats, ConfirmationDialog },
  data() {
    return {
      teamColor: this.$store.state.color,
      confirmChangesDialog: false,
      salesTabs: null,
      selectedSalesActivities: "",
      numOfSalesPers: 1,
      salesActivities: [
        {
          name: "Sales Activity 1",
          value: ["100", "50", "200"],
        },
        {
          name: "Sales Activity 2",
          value: ["300", "100", "600"],
        },
        {
          name: "Sales Activity 3",
          value: ["500", "250", "2000"],
        },
      ],
      standardPrice: 0.0,
      standardProPrice: 0.0,
      premiumPrice: 0.0,
    };
  },
  methods: {
    toggleDialog() {
      this.confirmChangesDialog = !this.confirmChangesDialog;
    },
    updateProgress() {
      // Todo: send data (as oData) to Backend
      console.log("redirect to Dashboard");
      this.$emit("updateProgress", "sales", 100);
      this.$router.push({ path: "/dashboard" });
      this.toggleDialog();
    },
    calculateCosts(selectedSalesActivities) {
      // check for NaN
      if (typeof selectedSalesActivities === "undefined") {
        return "";
      } else {
        return (selectedSalesActivities * this.numOfSalesPers).toFixed(2);
      }
    },
    toPreviousStep() {
      if(this.$store.state.round === 1) {
        this.$router.push({ path: "/bikeConstruction" });
      } else {
        this.$router.push({ path: "/qualityAssurance" }); 
      }
       
    }
  },
  props: {},
};
</script>
