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
            data: [10000, 9000, 6000, 9000, -1000, 1200],
            backgroundColor: "transparent",
            borderColor: "blue",
            pointBackgroundColor: "blue",
          },
          {
            label: "Engine Preparation",
            data: [3500, 9930, 5209, 9310, -1200, 6000],
            backgroundColor: "transparent",
            borderColor: "green",
            pointBackgroundColor: "green",
          },
          {
            label: "Frame Preparation",
            data: [3871, 13609, 3991, 7666, -100, 4871],
            backgroundColor: "transparent",
            borderColor: "#d47800",
            pointBackgroundColor: "#d47800",
          },
          {
            label: "Sensor Preparation",
            data: [2350, 10080, 5300, 9991, -400, 3871],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(1, 116, 188, 0.50)",
          },
          {
            label: "Bike Assemby",
            data: [200, 17000, 5900, 6600, -1600, 120],
            backgroundColor: "transparent",
            borderColor: "pink",
            pointBackgroundColor: "pink",
          },
          {
            label: "Logistics",
            data: [2670, 20130, 5370, 4300, -1310, 6350],
            backgroundColor: "transparent",
            borderColor: "#fff700",
            pointBackgroundColor: "#fff700",
          },
          {
            label: "Sensor Preparation",
            data: [8000, 10000, 5900, 9000, 10000, 10000],
            backgroundColor: "transparent",
            borderColor: "#006e4b",
            pointBackgroundColor: "#006e4b",
          },
          {
            label: "App development & maintence",
            data: [1000, 100, 10000, 6000, -1000, 5370],
            backgroundColor: "transparent",
            borderColor: "#46889c",
            pointBackgroundColor: "#46889c",
          },
          {
            label: "Quality Assurance",
            data: [1310, 2670, 666, 777, -2670, 5370],
            backgroundColor: "transparent",
            borderColor: "#540606",
            pointBackgroundColor: "#540606",
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
