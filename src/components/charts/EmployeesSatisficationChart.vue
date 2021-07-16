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
            label: "Battery Preparation",
            data: [2000, 10000, 5000, 9000, -1000, 6000],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
          {
            label: "Engine Preparation",
            data: [3500, 9930, 5209, 9310, -1200, 6000],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
          {
            label: "Frame Preparation",
            data: [3871, 13609, 3991, 7666, -100, 4871],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
          {
            label: "Sensor Preparation",
            data: [2350, 10080, 5300, 9991, -400, 3871],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
          {
            label: "Bike Assemby",
            data: [200, 17000, 5900, 6600, -1600, 120],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
          {
            label: "Logistics",
            data: [2670, 20130, 5370, 4300, -1310, 6350],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
          {
            label: "Sensor Preparation",
            data: [2000, 10000, 5000, 9000, -1000, 6000],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
          {
            label: "App development & maintence",
            data: [2000, 10000, 5000, 9000, -1000, 6000],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
          {
            label: "Quality Assurance",
            data: [2000, 10000, 5000, 9000, -1000, 6000],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
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
