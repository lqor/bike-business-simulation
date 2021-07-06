<template>
  <v-container id="logistics">
    <!-- Statistic about current and previous round -->
    <v-row>
      <v-col>
        <!-- Previous Round Status -->
        <v-card style="height:100%">
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
            Previous Round
          </v-card-title>
          <v-card-text>
            <p>Transport company: {{ prevTranspComp }}</p>
            <p>Delivery costs (EUR): {{ prevDelCosts }}</p>
            <p>Quality of delivery (%): {{ prevQualDel }}</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col>
        <!-- Current Round Status -->
        <v-card style="height:100%">
          <v-card-title :style="'background-color:' + teamColor +'!important'" style="color: white">
            Current Round
          </v-card-title>
          <v-card-text>
            <p>Transport company: {{ curTranspComp }}</p>
            <p>Delivery costs (EUR): {{ curDelCosts }}</p>
            <p>Quality of delivery (%): {{ curQualDel }}</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col>
        <!-- Cost Accounting -->
        <cost-accounting-card
          style="height:100%"
          :budget="10.0"
          :runningCosts="222.222"
          :avgProdCostBike="'Incomplete'"
          :estimatedQual="21.29"
          :maxProdCapac="'Incomplete'"
          :overDemand="40000.0"
        />
      </v-col>
    </v-row>

    <v-divider />

    <!-- Managing logistic process -->
    <v-row style="margin-top: 10px;">
      <h2 style="text-align: left;">Manage logistic process</h2>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedCompany"
          :items="transportCompanies"
          :color="teamColor"
          label="Choose transportation company..."
          item-text="name"
        />
      </v-col>

      <v-col>
        <v-text-field
          v-model="selectedCompany[0]"
          label="Delivery costs (EUR)"
          filled
          disabled
        />
        <v-text-field
          v-model="selectedCompany[1]"
          label="Quality of delivery (%)"
          filled
          disabled
        />
      </v-col>
    </v-row>

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
          <v-btn :color="teamColor" rounded dark right @click="toNextStep" >
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
import costAccountingCard from "../components/costAccountingCard";
import ConfirmationDialog from "../dialogs/ConfirmationDialog.vue";

export default {
  name: "logistics",
  components: { costAccountingCard, ConfirmationDialog },
  data() {
    return {
      teamColor: this.$store.state.color,
      confirmChangesDialog: false,
      transportCompanies: [
        {
          name: "Company 1",
          value: ["200", "81"],
        },
        {
          name: "Company 2",
          value: ["400", "97"],
        },
        {
          name: "Company 3",
          value: ["150", "77"],
        },
      ],
      selectedCompany: "",
      prevTranspComp: "Ebike GmBh",
      prevDelCosts: 0.0,
      prevQualDel: 0.0,
      curTranspComp: "Ebike GmBh",
      curDelCosts: 0.0,
      curQualDel: 0.0,
      budget: 150000.0,
      runningCosts: 0.0,
      avgProdCostBike: "Incomplete",
      estimatedQual: 0.0,
      maxProdCapac: "Incomplete",
      overDemand: 40000.0,
    };
  },
  methods: {
    getCosts() {
      console.log(this.selectedCompany);
      console.log(this.selectedCompany.text);
      console.log(this.selectedCompany.costs);
      console.log(this.selectedCompany.quality);

      if (!this.selectedCompany) {
        return null;
      } else {
        return this.selectedCompany.costs;
      }
    },
    getQuality() {
      return this.selectedCompany.quality;
    },
    toggleDialog() {
      this.confirmChangesDialog = !this.confirmChangesDialog;
    },
    updateProgress() {
      this.$emit("updateProgress", "logistics", 100);
      this.$router.push({ path: "/dashboard" });
      this.toggleDialog();
    },
    toNextStep() {
      this.$router.push({ path: "/framePreparation" });
    },
    toPreviousStep() {
       this.$router.push({ path: "/purchasing" });
    }
  },
  props: {
    progressElements: Array,
  },
};
</script>
