<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
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
            label: "Team 1",
            data: [10000, 9000, 6000, 9000, -1000, 1200],
            backgroundColor: "transparent",
            borderColor: "green",
            pointBackgroundColor: "green",
          },
          {
            label: "Team 2",
            data: [100, 200, 3500, 4000, -1000, 5000],
            backgroundColor: "transparent",
            borderColor: "red",
            pointBackgroundColor: "red",
          }
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "",
        },
      }
    );
  },
};
</script>
