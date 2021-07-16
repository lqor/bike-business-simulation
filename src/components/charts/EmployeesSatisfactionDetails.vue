<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ['selectedProcess'],
  mounted() {
      this.renderChart({
                labels: [
                "Round 1",
                "Round 2",
                "Round 3",
                "Round 4",
                "Round 5",
                "Round 6",
                ],
                datasets: [
                {
                    label: "Employee Satisfaction",
                    data: [10000, 10000, 10000, 9000, -1000, 1200],
                    backgroundColor: "transparent",
                    borderColor: "green",
                    pointBackgroundColor: "green",
                },
                {
                    label: "Quality",
                    data: [100, 200, 3500, 4000, -1000, 5000],
                    backgroundColor: "transparent",
                    borderColor: "red",
                    pointBackgroundColor: "red",
                },
                {
                    label: "Workload",
                    data: [444, 555, 6666, 7777, 9000, 50],
                    backgroundColor: "transparent",
                    borderColor: "blue",
                    pointBackgroundColor: "blue",
                },
                {
                    label: "Safety",
                    data: [9000, 7777, 3500, 100, -1000, 1200],
                    backgroundColor: "transparent",
                    borderColor: "yellow",
                    pointBackgroundColor: "yellow",
                }
        ]
                    },
            {
            responsive: true,
            maintainAspectRatio: false,
            title: {display: true,text: ""},
            }); 
  },
  watch: { 
    selectedProcess: function(newVal, oldVal) { // watch it
        console.log('Prop changed: ', newVal, ' | was: ', oldVal);

        this.usageChart.data.datasets.forEach((dataset) => {
            console.log('dataset');
            console.log(dataset);
        });
        this.usageChart.update();
    }
  }
};
</script>
